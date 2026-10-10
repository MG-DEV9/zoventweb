import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Architectural Sage Accent Backdrop matching screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Sage Green Offset Backdrop Plate */}
              <div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-full h-full bg-[#BFD4B2] pointer-events-none" 
                aria-hidden="true" 
              />
              
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#D9D2C7] shadow-lg">
                <img
                  src={current.image}
                  alt={`${current.author} - ${current.role} at ${current.company}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Quote & Attribution */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-6">
              What Partnership Feels Like
            </p>

            {/* Giant Elegant Quote Mark */}
            <span className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#A3B899] leading-none mb-2 select-none">
              “
            </span>

            {/* Quote Body in Editorial Serif */}
            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.25] text-[#1E1919] mb-8 text-balance">
              {current.quote}
            </blockquote>

            {/* Author Attribution */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#520818] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#1E1919] tracking-wide">
                  {current.author}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#7A7374] mt-0.5">
                  {current.role} · {current.company}
                </p>
              </div>
            </div>

            {/* Subtle Carousel Switcher if multiple testimonials */}
            {TESTIMONIALS.length > 1 && (
              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-[#E8E2D9]">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#520818]' : 'w-3 bg-[#D4CDC2] hover:bg-[#A8A094]'
                    }`}
                    aria-label={`View testimonial from ${t.author}`}
                  />
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
