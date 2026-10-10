import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HOLIDAY_DESTINATIONS } from '../data/content';
import { HolidayDestination } from '../types';

interface PrivateHolidaysProps {
  onSelectDestination: (dest: HolidayDestination) => void;
  onExplorePlanning: () => void;
}

export const PrivateHolidays: React.FC<PrivateHolidaysProps> = ({ 
  onSelectDestination, 
  onExplorePlanning 
}) => {
  return (
    <section id="private-holidays" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-14 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
              Private Holidays, Well Paced
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.08] text-balance">
              Go further. Never hurried.
            </h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-5">
            <p className="text-sm sm:text-base text-[#524B4C] leading-relaxed max-w-md">
              Considered routes, characterful stays and local access — shaped around how you like to travel, not a fixed template.
            </p>
            <button
              onClick={onExplorePlanning}
              className="border border-[#3A3334] hover:bg-[#1E1919] hover:text-white text-[#1E1919] text-xs uppercase font-medium tracking-widest px-6 py-3.5 flex items-center gap-2.5 transition-all cursor-pointer group"
            >
              <span>Explore Holiday Planning</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOLIDAY_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group relative overflow-hidden aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[3/4] bg-[#2E2829] cursor-pointer shadow-md transition-all hover:shadow-xl"
            >
              {/* Destination Photography */}
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />

              {/* Top Badges matching screenshot */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/90 font-medium">
                <span className="bg-black/30 backdrop-blur-sm px-2.5 py-1 border border-white/15">
                  {dest.region}
                </span>
                <span className="bg-black/30 backdrop-blur-sm px-2.5 py-1 border border-white/15">
                  {dest.nights}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2 group-hover:text-[#F3EFE8] transition-colors">
                      {dest.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-light line-clamp-2">
                      {dest.summary}
                    </p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#1E1919] group-hover:border-white transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
