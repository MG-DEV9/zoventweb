import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, Star, ShieldCheck, Globe, Users } from 'lucide-react';
import { SERVICES_CATALOG, BLOG_POSTS, SITE_INFO } from '../data/zoventsData';
import { HeroLeadForm } from '../components/HeroLeadForm';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

const HERO_IMAGES = ['/images/Hero1.png', '/images/Hero2.png', '/images/Hero3.png'];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const tickerItems = [
    'CONFERENCES', 'MICE', 'OFFSITES', 'TEAM BUILDING', 
    'BRAND ACTIVATIONS', 'AWARD CEREMONIES', 'CORPORATE TRAVEL', 'INCENTIVE PROGRAMMES'
  ];

  const processTicker = [
    ' INITIAL BRIEF', ' CONCEPT & STRATEGY', ' VENUE & VENDOR SOURCING',
    ' PRE-PRODUCTION', ' ON-GROUND EXECUTION', ' POST-EVENT REPORTING'
  ];

  const testimonials = [
    {
      quote: "ZOVENT HANDLED OUR 600-DELEGATE ANNUAL CONFERENCE FLAWLESSLY — FROM VENUE NEGOTIATIONS TO ON-GROUND LOGISTICS.",
      name: "RITIKA SHARMA",
      role: "HEAD OF HR",
      company: "AXIS FINANCIAL SERVICES"
    },
    {
      quote: "THE INCENTIVE TRIP THEY DESIGNED FOR OUR TOP PERFORMERS WAS WORLD-CLASS. OUR TEAM IS STILL TALKING ABOUT IT SIX MONTHS LATER.",
      name: "VIKRAM NAIR",
      role: "VP SALES",
      company: "TECHCORE INDIA"
    },
    {
      quote: "THEIR ATTENTION TO DETAIL AND ENTERPRISE-GRADE PROJECT MANAGEMENT GAVE US COMPLETE CONFIDENCE.",
      name: "RITESH MEHTA",
      role: "DIRECTOR – CORPORATE AFFAIRS",
      company: "STEELMARK GROUP"
    }
  ];

  const clientLogos = [
    { name: 'ACCE', src: '/images/clients/ACCE.png' },
    { name: 'ATUMX', src: '/images/clients/ATUMX.png' },
    { name: 'Garnier', src: '/images/clients/Garnier.png' },
    { name: 'ISKON', src: '/images/clients/ISKON.png' },
    { name: 'Kotak', src: '/images/clients/Kotak.png' },
    { name: 'Mindgrove', src: '/images/clients/Mindgrove.png' },
    { name: 'NKDA', src: '/images/clients/NKDA.png' },
    { name: 'BEVA', src: '/images/clients/beva.png' },
    { name: 'LIC', src: '/images/clients/lic.png' },
    { name: 'Star Health', src: '/images/clients/star-health.png' },
    { name: 'Suntory', src: '/images/clients/suntory.png' }
  ];

  return (
    <div className="bg-[#FAF8F5]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-18 lg:pb-28 border-b border-[#E8E2D9] overflow-hidden">
        {/* Rotating Hero Background */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === heroSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0409]/90 via-[#1C0409]/70 to-[#1C0409]/40" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">

              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight font-normal text-white mb-6 text-balance">
                WE TURN IDEAS <br />INTO EXPERIENCES.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl mb-10">
                Full-spectrum corporate event management, MICE programmes, and luxury travel — across cities worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer group"
                >
                  <span>GET A QUOTE</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-white/50 hover:bg-white hover:text-[#1E1919] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-2.5 transition-all cursor-pointer group"
                >
                  <span>VIEW SERVICES →</span>
                </button>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-2 mt-12">
                {HERO_IMAGES.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => setHeroSlide(idx)}
                    aria-label={`Show hero image ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === heroSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Hero Lead Form matching user request */}
            <div className="lg:col-span-5 relative">
              <HeroLeadForm sourceContext="Home Page Hero" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. SCROLLING TICKER */}
      <div className="bg-[#520818] text-white py-4 overflow-hidden border-y border-[#3A0713]">
        <div className="animate-marquee gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#fdfafa]">
          {tickerItems.concat(tickerItems).concat(tickerItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#faf5f6]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. SERVICES SECTION: WHAT WE DO */}
      <section id="services" className="py-20 lg:py-28 bg-[#F2E6EA] border-b border-[#E2CFD6]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            {/* <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#73525C] mb-3">
              [ SERVICES ] — WHAT WE DO.
            </p> */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal">
              WHAT WE DO.
            </h2>
          </div>

          {/* 6 Services Grid matching exact copy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CATALOG.map((svc) => (
              <div
                key={svc.slug}
                className="bg-white border border-[#E3D3D8] flex flex-col justify-between group hover:border-[#520818] transition-all hover:shadow-xl overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E5DFD5]">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C8485] mb-4">
                      [ {svc.tag} ]
                    </p>
                    <h3 className="font-Cormorant Garamond Medium text-2xl sm:text-3xl text-[#1E1919] font-normal mb-4 group-hover:text-[#520818] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed mb-6">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/services/${svc.slug}`)}
                      className="text-xs uppercase tracking-widest font-semibold text-[#520818] hover:text-[#680B20] flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>VIEW SERVICE →</span>
                    </button>
                    <ArrowUpRight size={16} className="text-[#8C8485] group-hover:text-[#520818]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS TICKER */}
      <div className="bg-[#520818] text-white py-4 overflow-hidden border-y border-[#3E0411]">
        <div className="animate-marquee gap-10 text-xs uppercase tracking-[0.18em] font-medium text-[#fffdfd]">
          {processTicker.concat(processTicker).concat(processTicker).map((item, idx) => (
            <span key={idx} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#f8f4f5]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* 5. WHY ZOVENT SECTION */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-3">
                [ WHY ZOVENT ]
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#1E1919] font-normal leading-[1.1] mb-6 text-balance">
                VERSATILE IDEAS SEAMLESS EXECUTION, UNFORGETTABLE EXPERIENCES.
              </h2>
              <p className="text-xs uppercase tracking-[0.16em] text-[#520818] font-bold mb-8">
                CORPORATE EVENTS · M.I.C.E · CORPORATE TRAVEL · HOLIDAYS
              </p>
              <button
                onClick={() => onNavigate('/about')}
                className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-7 py-3.5 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>OUR STORY →</span>
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-[#E0D9CF] p-6 sm:p-8 flex items-start gap-4">
                <span className="text-[#520818] font-bold text-lg mt-0.5">◆</span>
                <div>
                  <h3 className="font-Cormorant Garamond Medium text-2xl text-[#1E1919] font-normal mb-1">
                    End-to-End Event Management
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed">
                    From the first brief to the final applause.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E0D9CF] p-6 sm:p-8 flex items-start gap-4">
                <span className="text-[#520818] font-bold text-lg mt-0.5">◆</span>
                <div>
                  <h3 className="font-Cormorant Garamond Medium text-2xl text-[#1E1919] font-normal mb-1">
                    Corporate Travel, Without the Hassle
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed">
                    Flights, stays, transport and experiences—handled seamlessly.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E0D9CF] p-6 sm:p-8 flex items-start gap-4">
                <span className="text-[#520818] font-bold text-lg mt-0.5">◆</span>
                <div>
                  <h3 className="font-Cormorant Garamond Medium text-2xl text-[#1E1919] font-normal mb-1">
                    M.I.C.E. & Destination Expertise
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed">
                    Meetings, incentives, conferences and group experiences, wherever you go.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E0D9CF] p-6 sm:p-8 flex items-start gap-4">
                <span className="text-[#520818] font-bold text-lg mt-0.5">◆</span>
                <div>
                  <h3 className="font-Cormorant Garamond Medium text-2xl text-[#1E1919] font-normal mb-1">
                    Every Detail. Thoughtfully Managed.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed">
                    People, partners, logistics and contingencies—planned before they become problems.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS / REAL CLIENTS */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-2">
              [ TESTIMONIAL  ]
            </p>
            <h2 className="font-Cormorant Garamond Medium text-2xl  text-[#520818] font-normal">
              Trusted by enterprise leadership.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#FCFBF8] border border-[#E3DDD4] p-8 flex flex-col justify-between">
                <p className="font-serif text-xl sm:text-2xl text-[#1E1919] leading-snug mb-8 font-normal italic">
                  “{t.quote}”
                </p>

              </div>
            ))}
          </div>

          {/* Metric highlight matching transcript: 100% Client Satisfaction Rate */}
          <div className="bg-[#520818] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-6">
              <span className="font-Georgia Regular text-5xl sm:text-6xl text-white font-light tabular-nums">
                100%
              </span>
              <div>
                <p className="text-sm uppercase tracking-widest font-semibold text-white">
                  CLIENT SATISFACTION RATE
                </p>

              </div>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase tracking-widest px-6 py-3.5 shrink-0 transition-colors cursor-pointer"
            >
              Discuss with us →
            </button>
          </div>

          {/* Client Logos Strip matching [ CLIENTS WE’VE SERVED ] */}
          <div className="mt-16 pt-12 pb-12 border-t bg-[#F2E6EA] border-[#E8E2D9]">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] text-center mb-8">
              [ CLIENTS WE’VE SERVED ]
            </p>
            <div className="overflow-hidden">
              <div className="animate-marquee gap-6">
                {clientLogos.concat(clientLogos).map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="h-20 w-40 shrink-0 flex items-center justify-center p-4 border border-[#E8E2D9] bg-white"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. INSIGHTS — FROM THE BLOG */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-2">
                [ INSIGHTS ] — FROM THE BLOG.
              </p>
              <h2 className="font-Cormorant Garamond Medium text-4xl sm:text-5xl text-[#1E1919] font-normal">
                Perspectives on Events, M.I.C.E, and Travel.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('/blog')}
              className="text-xs uppercase tracking-widest font-semibold text-[#520818] hover:underline cursor-pointer self-start md:self-end"
            >
              ALL ARTICLES →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((b) => (
              <div 
                key={b.slug}
                onClick={() => onNavigate(`/blog/${b.slug}`)}
                className="bg-[#FCFBF8] border border-[#E5DFD5] p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-[#520818] transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#8C8485] font-semibold mb-3">
                    <span className="text-[#520818]">[ {b.category} ]</span>
                    <span>{b.date}</span>
                  </div>
                  <h3 className="font-Inter text-2xl text-[#1E1919] font-normal leading-snug mb-3 group-hover:text-[#520818] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#5C5556] leading-relaxed line-clamp-3 mb-6">
                    {b.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-[#520818]">
                  <span>READ ARTICLE →</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CTA matching [ GOT A PROJECT? ] */}
      <section className="bg-[#1C0409] text-white py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#D7B4BC] mb-4">
            [ Request a Proposal? ]
          </p>
          <h2 className="font- Cormorant Garamond Medium text-4xl sm:text-5xl lg:text-6xl text-white font-normal mb-6 max-w-2xl mx-auto">
            <p>Your next big moment</p>
            <p>starts here.</p>
             
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
            From the first brief to the final applause — Zovent handles every dimension so you can focus entirely on what matters.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>[ GET A QUOTE ] →</span>
            </button>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="border border-white/30 hover:bg-white hover:text-[#1E1919] text-white text-xs lowercase font-medium tracking-widest px-8 py-4 transition-colors"
            >
              <span>{SITE_INFO.email} →</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
