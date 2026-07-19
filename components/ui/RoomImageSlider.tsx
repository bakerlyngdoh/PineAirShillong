"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface RoomImageSliderProps {
  images: string[];
  alt: string;
}

export const RoomImageSlider: React.FC<RoomImageSliderProps> = ({ images: initialImages, alt }) => {
  // Duplicate array if exactly 2 images to ensure smooth one-way directional sliding
  const images = initialImages.length === 2 ? [...initialImages, ...initialImages] : initialImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden group/slider">
      {images.map((image, index) => {
        // Default position: off-screen to the left (where images go after exiting to the left)
        let translateX = "-translate-x-full opacity-0 z-0";

        if (index === currentIndex) {
          // Current image is in the center
          translateX = "translate-x-0 opacity-100 z-10";
        } else if (index === (currentIndex + 1) % images.length) {
          // Next image waits off-screen to the right (ready to slide in from right to left)
          translateX = "translate-x-full opacity-0 z-0";
        }

        return (
          <div
            key={`${image}-${index}`}
            className={`absolute inset-0 transition-all duration-1000 ease-in ${translateX}`}
          >
            <Image
              src={image}
              alt={`${alt} - view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
};
