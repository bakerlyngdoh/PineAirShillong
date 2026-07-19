"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface RoomImageSliderProps {
  images: string[];
  alt: string;
  intervalMs?: number;
  enableModal?: boolean;
}

export const RoomImageSlider: React.FC<RoomImageSliderProps> = ({
  images: initialImages,
  alt,
  intervalMs = 4000,
  enableModal = false,
}) => {
  // Duplicate array if exactly 2 images to ensure smooth one-way directional sliding
  const images = initialImages.length === 2 ? [...initialImages, ...initialImages] : initialImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images.length, intervalMs, isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const openModal = () => {
    if (!enableModal) return;
    setModalIndex(currentIndex % initialImages.length);
    setIsModalOpen(true);
  };

  const handlePrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev - 1 + initialImages.length) % initialImages.length);
  };

  const handleNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % initialImages.length);
  };

  return (
    <>
      <div
        className={`relative aspect-[4/3] overflow-hidden group/slider ${
          enableModal ? "cursor-pointer" : ""
        }`}
        onClick={openModal}
      >
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
                className="object-cover transition-transform duration-700 group-hover/slider:scale-105"
              />
            </div>
          );
        })}

        {/* Zoom hint badge when modal is enabled */}
        {enableModal && (
          <div className="absolute inset-0 z-20 bg-black/0 group-hover/slider:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm text-white text-xs px-3.5 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
              <Maximize2 size={14} />
              <span>Click for larger view</span>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Pop-up Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Close image popup"
          >
            <X size={24} />
          </button>

          {/* Image container */}
          <div
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={initialImages[modalIndex]}
              alt={`${alt} - full view ${modalIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {/* Navigation arrows in modal */}
            {initialImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevModal}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10 shadow-lg cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleNextModal}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10 shadow-lg cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Image counter */}
            {initialImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/60 backdrop-blur-sm text-white/90 text-sm rounded-full border border-white/10">
                {modalIndex + 1} / {initialImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
