import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';

interface HowWeCanHelpProps {
  onSelectMandate: (service: ServiceItem) => void;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const HowWeCanHelp: React.FC<HowWeCanHelpProps> = ({ onSelectMandate, onOpenEnquiry }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="how-we-can-help" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-4">
              How We Can Help
            </p>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.1] mb-6 text-balance">
              A clear route from ambition to arrival.
            </h2>
            
            <p className="text-base text-[#524B4C] leading-relaxed mb-10 max-w-lg">
              Choose the mandate. We assemble the right specialists, establish the rhythm and own the details that keep people moving.
            </p>

            {/* Photo of event planner reviewing blueprints */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-md bg-[#E5DFD5]">
              <img
                src="/images/planner_desk_review_1791547802924.jpg"
                alt="Event planner reviewing architectural floorplans and schedules"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Numbered List matching screenshot */}
          <div className="lg:col-span-7 divide-y divide-[#E3DDD4] border-y border-[#E3DDD4]">
            {SERVICES_LIST.map((service) => {
              const isExpanded = activeId === service.id;

              return (
                <div 
                  key={service.id}
                  className="group transition-colors duration-200"
                >
                  <button
                    onClick={() => {
                      setActiveId(isExpanded ? null : service.id);
                    }}
                    className="w-full py-7 sm:py-8 flex items-start sm:items-center justify-between gap-6 text-left cursor-pointer group-hover:bg-[#F3EFE8]/70 px-4 -mx-4 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start sm:items-center gap-6 sm:gap-8 flex-1">
                      {/* Number */}
                      <span className="font-serif text-xs md:text-sm text-[#8C8485] tabular-nums shrink-0 pt-1 sm:pt-0">
                        {service.number}
                      </span>

                      {/* Title & Short Description */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 flex-1 items-baseline">
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1919] font-normal md:col-span-5 group-hover:text-[#520818] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#666061] leading-relaxed md:col-span-7">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow button */}
                    <div className="shrink-0 pt-1 sm:pt-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#4A4545] group-hover:text-[#520818] group-hover:bg-[#EBE5DC] transition-all">
                        <ArrowUpRight 
                          size={18} 
                          className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                        />
                      </div>
                    </div>
                  </button>

                  {/* Expandable Details Tray */}
                  {isExpanded && (
                    <div className="pb-8 px-4 pt-2 -mx-4 bg-[#F5F0E8]/50 animate-in fade-in duration-200">
                      <div className="pl-12 sm:pl-14 pr-4">
                        <p className="text-sm text-[#443E3F] leading-relaxed mb-4">
                          {service.fullOverview}
                        </p>
                        
                        {service.deliverables && (
                          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-[#5C5556]">
                                <Check size={14} className="text-[#520818] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <button
                            onClick={() => onOpenEnquiry(service.title)}
                            className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase tracking-wider px-5 py-2.5 flex items-center gap-2 cursor-pointer transition-colors"
                          >
                            <span>Brief this Mandate</span>
                            <ArrowUpRight size={14} />
                          </button>
                          <button
                            onClick={() => onSelectMandate(service)}
                            className="text-xs uppercase tracking-wider font-semibold text-[#520818] hover:underline px-3 py-2 cursor-pointer"
                          >
                            View Case Studies
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
