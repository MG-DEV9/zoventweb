import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';

interface SelectedWorkProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectCaseStudy }) => {
  const [largeCase, topCase, bottomCase] = CASE_STUDIES;

  return (
    <section id="selected-work" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-14 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.08] text-balance">
              Mandates, made tangible.
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#524B4C] leading-relaxed">
              A view into the strategy, production and hospitality decisions behind recent work.
            </p>
          </div>
        </div>

        {/* Asymmetric Case Grid matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Large Marquee Case */}
          <div 
            onClick={() => onSelectCaseStudy(largeCase)}
            className="lg:col-span-7 group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#E2DBD0] shadow-md mb-5">
              <img
                src={largeCase.image}
                alt={largeCase.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

              {/* Arrow bottom-right button */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 text-[#1E1919] shadow-md group-hover:bg-[#520818] group-hover:text-white transition-all">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8C8485] mb-2">
              {largeCase.tag}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#1E1919] font-normal leading-snug mb-3 group-hover:text-[#520818] transition-colors">
              {largeCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#666061] leading-relaxed max-w-xl">
              {largeCase.description}
            </p>
          </div>

          {/* Right 2 Stacked Cases */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Top Right Card: Incentive Sri Lanka */}
            <div 
              onClick={() => onSelectCaseStudy(topCase)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E2DBD0] shadow-md mb-4">
                <img
                  src={topCase.image}
                  alt={topCase.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 text-[#1E1919] shadow-md group-hover:bg-[#520818] group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8C8485] mb-1.5">
                {topCase.tag}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1E1919] font-normal leading-snug mb-2 group-hover:text-[#520818] transition-colors">
                {topCase.title}
              </h3>
              <p className="text-xs text-[#666061] leading-relaxed">
                {topCase.description}
              </p>
            </div>

            {/* Bottom Right Card: Leadership Rajasthan */}
            <div 
              onClick={() => onSelectCaseStudy(bottomCase)}
              className="group cursor-pointer flex flex-col pt-4 border-t border-[#E8E2D9]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E2DBD0] shadow-md mb-4">
                <img
                  src={bottomCase.image}
                  alt={bottomCase.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 text-[#1E1919] shadow-md group-hover:bg-[#520818] group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#8C8485] mb-1.5">
                {bottomCase.tag}
              </p>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1E1919] font-normal leading-snug mb-2 group-hover:text-[#520818] transition-colors">
                {bottomCase.title}
              </h3>
              <p className="text-xs text-[#666061] leading-relaxed">
                {bottomCase.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
