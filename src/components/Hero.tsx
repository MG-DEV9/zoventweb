import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreWork }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Kicker */}
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#827B7B] mb-4">
              Events and Travel Considered
            </p>

            {/* Giant Editorial Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.05] tracking-tight font-normal text-[#1E1919] mb-8 text-balance">
              Every detail <br className="hidden sm:inline" />in motion.
            </h1>

            {/* Sage/Tinted Descriptor Box matching screenshot */}
            <div className="bg-[#EEF4EA] border-l-2 border-[#A7C897] p-5 sm:p-6 mb-8 max-w-xl">
              <p className="text-[15px] sm:text-base leading-relaxed text-[#2C2728]">
                ZOVENT brings strategy, hospitality and creative precision to corporate events, MICE, business travel and private social occasions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-7 py-4 flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Start an Enquiry</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreWork}
                className="border border-[#3A3334] hover:bg-[#1E1919] hover:text-white text-[#1E1919] text-xs uppercase font-medium tracking-widest px-7 py-4 flex items-center gap-2.5 transition-all cursor-pointer group"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Quiet Footer Note */}
            <p className="text-xs text-[#7A7374] tracking-wide italic">
              — One accountable partner, from brief to arrival.
            </p>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/11] overflow-hidden shadow-2xl bg-[#EBE5DC]">
              <img
                src="/src/assets/images/hero_banquet_udaipur_1791547888910.jpg"
                alt="Leadership Offsite in Udaipur - Grand Banquet Courtyard with Chandeliers"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Bottom Right Floating Badge matching screenshot */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-lg border border-[#EDE8E1] max-w-xs text-right">
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8C8485] mb-0.5">
                  Leadership Offsite · Udaipur
                </p>
                <p className="font-serif text-base sm:text-lg text-[#1E1919] font-medium leading-snug">
                  Three days. One clear direction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
