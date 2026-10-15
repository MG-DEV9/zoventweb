import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Target, MapPin } from 'lucide-react';
import { SITE_INFO } from '../data/zoventsData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  const ticker = [
    'SMART THINKING', 'SEAMLESS EXECUTION', 'MEMORABLE EXPERIENCES', 'REAL IMPACT'
  ];

  const values = [
    {
      title: 'PRECISION',
      description: 'Every detail, every timeline, every contingency — planned before it becomes a problem.',
      icon: Target
    },
    {
      title: 'CREATIVITY',
      description: 'We think beyond the obvious to design experiences that feel fresh, relevant, and memorable.',
      icon: Sparkles
    },
    {
      title: 'INTEGRITY',
      description: 'Transparent communication, honest budgets, and delivery on every promise we make.',
      icon: ShieldCheck
    },
    {
      title: 'IMPACT',
      description: 'We measure success by the impression we leave — on brands, on teams, on audiences.',
      icon: Compass
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'BRIEF & STRATEGY',
      desc: 'We start by listening deeply before designing anything.'
    },
    {
      num: '02',
      title: 'CONCEPT & CURATION',
      desc: 'Venues, themes, experiences — tailored to your brand and goals.'
    },
    {
      num: '03',
      title: 'PRE-PRODUCTION',
      desc: 'Logistics, partners, timelines — locked in before the event begins.'
    },
    {
      num: '04',
      title: 'ON-GROUND EXECUTION',
      desc: 'Our team manages every moving part so you can focus on your people.'
    },
    {
      num: '05',
      title: 'POST-EVENT INSIGHT',
      desc: 'We measure, report, and refine — ready for the next one.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* Header Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">
            [ ABOUT ZOVENT ]
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-8 text-balance">
            SMART THINKING. SEAMLESS EXECUTION. MEMORABLE EXPERIENCES.
          </h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            We turn briefs into experiences people remember. From high-impact corporate events to carefully curated MICE programmes.
          </p>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[#520818] text-white py-4 overflow-hidden border-y border-[#3A0713]">
        <div className="animate-marquee gap-10 text-xs uppercase tracking-[0.2em] font-medium text-[#f9f6f6]">
          {ticker.concat(ticker).concat(ticker).concat(ticker).map((item, idx) => (
            <span key={idx} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#fffcfd]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Our Story & Mission */}
      <section className="py-20 lg:py-28 bg-[#F2E6EA] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-4">
                [ OUR STORY ]
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1919] font-normal leading-tight mb-6">
                ANYONE CAN ORGANISE AN EVENT. WE CREATE THE ONE THEY KEEP TALKING ABOUT.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#4F494A] leading-relaxed">
                <p>
                  At ZOVENT, we turn briefs into experiences people remember. From high-impact corporate events to carefully curated MICE programmes, we believe every detail has a role to play.
                </p>
                <p>
                  The venue matters. The welcome matters. The last goodbye matters too — because when everything comes together, an event becomes more than an event. It becomes a feeling.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#520818] text-white p-8 sm:p-12 shadow-xl">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-4">
                  [ OUR MISSION ]
                </p>
                <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug mb-8">
                  “To turn big ideas into experiences that move people, elevate brands, and deliver real impact.”
                </blockquote>
                <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                  <span className="font-serif text-xl tracking-widest text-white/90">ZOVENT</span>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs uppercase tracking-wider font-semibold text-[#F2D7DD] hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request a Proposal</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values: What Drives Us */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-2">
              [ WHAT DRIVES US ]
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1E1919] font-normal">
              Our Values.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white border border-[#E3DDD4] p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E3DDD4] flex items-center justify-center text-[#520818] mb-6">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-serif text-2xl text-[#1E1919] font-normal mb-3">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work: 5 Steps */}
      <section className="py-20 lg:py-28 bg-[#F2E6EA] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-2">
              [ HOW WE WORK ]
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1E1919] font-normal">
              Process That Delivers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="border-t-2 border-[#A7C897] pt-6 flex flex-col justify-between">
                <div>
                  {/* <span className="font-serif text-xs text-[#8C8485] tabular-nums block mb-2 font-medium">
                    {st.num}
                  </span> */}
                  <h3 className="font-serif text-xl text-[#1E1919] font-bold mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#5C5556] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-India Presence
      <section className="py-20 lg:py-28 bg-[#1C0409] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-3">
              [ PAN-INDIA PRESENCE ] · [ OUR REACH ]
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal mb-4">
              15+ CITIES. ONE STANDARD.
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Vetted five-star venues, certified production crews, and dedicated on-ground dispatches nationwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {SITE_INFO.citiesReached.map((city, idx) => (
              <span
                key={idx}
                className="px-5 py-3 border border-white/20 bg-white/5 text-xs uppercase tracking-widest font-medium text-white/90 hover:bg-white/15 transition-colors"
              >
                {city}
              </span>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={onOpenQuote}
              className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 cursor-pointer shadow-lg inline-flex items-center gap-2"
            >
              <span>Plan an Event in Your City →</span>
            </button>
          </div>
        </div>
      </section> */}

    </div>
  );
};
