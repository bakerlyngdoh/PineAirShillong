import React from 'react';
import Image from 'next/image';

const partners = [
  {
    name: "Explore Meghalaya",
    logo: "/images/PartnerLogos/Explore_Meghalaya.jpeg",
    url: "#", // Add the actual link here (e.g., "https://exploremeghalaya.com")
  },
  {
    name: "Spring Valley",
    logo: "/images/PartnerLogos/Spring_Valley.jpeg",
    url: "#", // Add the actual link here
  },
  {
    name: "Tris Logo",
    logo: "/images/PartnerLogos/Tris_Logo.png",
    url: "#", // Add the actual link here
  }
];

export const Partners: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white/50 border-t border-pine-primary/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-pine-charcoal italic">Our Travel Partners</h2>
          <p className="text-pine-gray font-light tracking-wide max-w-lg mx-auto">
            We are proud to collaborate with these esteemed travel agencies who trust us to host their guests.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-36 h-36 md:w-48 md:h-48 transition-all duration-500 flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 group"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                fill
                className="object-contain p-2 rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
