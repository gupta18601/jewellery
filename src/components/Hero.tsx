"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    { src: "/sapphire.jpg", alt: "Elegant jewellery piece" },
    { src: "/emerald.jpg", alt: "Stunning emerald jewellery" },
    { src: "/ruby.jpg", alt: "Brilliant ruby jewellery" },
    { src: "/diamond.jpg", alt: "Timeless diamond craftsmanship" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={`${image.src}`}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-down">
          Exquisite Jewelry & Precious Stones
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up">
          Crafting Elegance, Importing Beauty, Exporting Excellence
        </p>
        <a
          href="/contact-us"
          className="bg-amber-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-amber-700 transition duration-300"
        >
          Discover Our Collection
        </a>
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}
