import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { ServiceDetail } from '../data/zoventsData';
import { HeroLeadForm } from '../components/HeroLeadForm';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate, onOpenQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Top Breadcrumb & Hero */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C8485] hover:text-[#520818] mb-8 cursor-pointer transition-colors"
          >
            <ArrowLeft size={14} />
            <span>BACK TO HOME</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#520818] block mb-3">
                [ {service.tag} ]
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.08] mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-xl text-[#524B4C] font-light leading-relaxed mb-8">
                {service.heroTagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-0">
                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>[ GET A QUOTE ] →</span>
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="border border-[#4A4545] hover:bg-[#1E1919] hover:text-white text-[#1E1919] text-xs uppercase font-medium tracking-widest px-8 py-4 transition-colors cursor-pointer"
                >
                  <span>Contact Event Desk</span>
                </button>
              </div>
            </div>

            {/* Right Hero Lead Form matching user request */}
            <div className="lg:col-span-5 relative">
              <HeroLeadForm sourceContext={service.title} />
            </div>

          </div>

        </div>
      </section>

      {/* Overview & Key Offerings */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1919] font-normal mb-6">
                Strategic Scope & Methodology
              </h2>
              <p className="text-sm sm:text-base text-[#4F494A] leading-relaxed mb-8">
                {service.overview}
              </p>

              <div className="bg-[#EEF4EA] border-l-2 border-[#A7C897] p-5">
                <p className="text-xs text-[#2A4421] leading-relaxed">
                  Every mandate is paired with a dedicated ZOVENT Project Director overseeing vendor governance, delegate protocol, and on-ground logistics.
                </p>
              </div>
            </div>

            {/* Bullet Points Grid */}
            <div className="lg:col-span-7 bg-[#FCFBF8] border border-[#E3DDD4] p-8 sm:p-10 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-6">
                End-to-End Capabilities
              </h3>

              <div className="space-y-6">
                {service.bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 pb-5 border-b border-[#EFE9E0] last:border-b-0 last:pb-0">
                    <span className="text-[#520818] font-bold mt-0.5">◆</span>
                    <div>
                      <h4 className="text-sm font-bold text-[#1E1919] mb-1">
                        {bp.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed">
                        {bp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Tags if present */}
          {service.tags && (
            <div className="mt-16 pt-8 border-t border-[#E8E2D9]">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-4">
                Specialisations & Focus Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] uppercase tracking-wider bg-[#F0EBE1] text-[#4A4545] px-3 py-1.5 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FAQs Section matching transcript */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-2">
              [ FAQ ]
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1919] font-normal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-[#E0D9CF] overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-xs text-[#8C8485] pt-0.5 tabular-nums">
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span className="font-serif text-lg sm:text-xl text-[#1E1919] font-normal">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`text-[#8C8485] shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#F2ECE3] bg-[#FCFBF8]">
                      <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed pl-8">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onOpenQuote(service.title)}
              className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>[ GET A QUOTE FOR THIS SERVICE ] →</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
