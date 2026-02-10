"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export function ImageSlider({ images, autoSlide = true, autoSlideInterval = 3000 }) {
  const [curr, setCurr] = useState(0);

  // Helper: Next Slide
  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  // Helper: Previous Slide
  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide, autoSlideInterval]);

  // If no images are passed, don't render anything
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] group overflow-hidden bg-gray-900 rounded-xl shadow-xl">
      
      {/* 1. The Image Strip */}
      <div
        className="flex transition-transform ease-out duration-700 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full relative h-full">
            {/* Using Next.js Image for optimization */}
            <Image 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              fill
              className="object-cover"
              priority={index === 0} // Load the first image faster
            />
            
            {/* Dark Overlay for better contrast if you add text later */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* 2. Navigation Buttons (Hidden on mobile, show on hover/desktop) */}
      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={prev} className="p-2 rounded-full bg-white/30 hover:bg-white text-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={next} className="p-2 rounded-full bg-white/30 hover:bg-white text-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* 3. Indicators (Dots) */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full cursor-pointer shadow-md
                ${curr === i ? "p-2 opacity-100 scale-110" : "bg-opacity-50 hover:bg-opacity-75"}
              `}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}