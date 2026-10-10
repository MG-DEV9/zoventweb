import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CorporateMiceProps {
  onDiscussMandate: () => void;
  onViewCaseStudy: (caseId: string) => void;
}

export const CorporateMice: React.FC<CorporateMiceProps> = ({ onDiscussMandate, onViewCaseStudy }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    {
      num: '01',
      title: 'Leadership & strategy',
      subtitle: 'Offsites, annual meets, town halls',
      detail: 'Choreographed environments designed for executive alignment, high-stakes dialogue, and strategic cohesion.'
    },
    {
      num: '02',
      title: 'Brand & market',
      subtitle: 'Launches, dealer meets, conferences',
      detail: 'Sensory stage craft, media-grade keynote productions, and unforgettable dealer network galas.'
    },
    {
      num: '03',
      title: 'Reward & recognition',
      subtitle: 'Incentives, awards, team experiences',
      detail: 'High-touch milestone programs that genuinely celebrate top talent across extraordinary global settings.'
    },
    {
      num: '04',
      title: 'Movement & hospitality',
      subtitle: 'Flights, rooms, transfers, guest desks',
      detail: 'Precision ground dispatches, dedicated hotel hospitality desks, and zero-friction attendee movements.'
    }
  ];

  return (
    <section id="corporate-events" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-14 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
              Corporate Events and MICE
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.08] text-balance">
              Built around the outcome, not just the occasion.
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#524B4C] leading-relaxed">
              From a 40-person leadership room to a 1,500-guest convention, every workstream is connected to one plan, one timeline and one accountable team.
            </p>
          </div>
        </div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Large Media Container */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => onViewCaseStudy('case-01')}
              className="relative aspect-[16/10] overflow-hidden bg-[#E2DBD0] shadow-lg group cursor-pointer"
            >
              <img
                src="/src/assets/images/keynote_partner_summit_1791547815948.jpg"
                alt="National partner summit in tiered auditorium with 1,200 delegates"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              {/* Bottom Badge Tag matching screenshot */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3 shadow-md border border-[#E8E2D9] flex items-center gap-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#520818] bg-[#FAF8F5] px-2 py-0.5 border border-[#520818]/20">
                  Case 07
                </span>
                <span className="text-xs sm:text-sm text-[#241F20] font-medium">
                  National partner summit · 1,200 delegates
                </span>
              </div>
            </div>
          </div>

          {/* Right Accordion & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-[#E3DDD4] border-y border-[#E3DDD4] mb-8">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="py-5 sm:py-6 group transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-5">
                      <span className="font-serif text-xs md:text-sm text-[#8C8485] pt-0.5 tabular-nums">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl text-[#1E1919] font-normal group-hover:text-[#520818] transition-colors flex items-center gap-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#666061] mt-1">
                          {item.subtitle}
                        </p>
                        {hoveredIdx === idx && (
                          <p className="text-xs text-[#443E3F] mt-2.5 leading-relaxed animate-in fade-in duration-200">
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <ArrowUpRight 
                      size={18} 
                      className="text-[#8C8485] group-hover:text-[#520818] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" 
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Button matching screenshot */}
            <div>
              <button
                onClick={onDiscussMandate}
                className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-2.5 transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Discuss Your Mandate</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
