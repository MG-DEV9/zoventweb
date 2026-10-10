import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_INFO, SERVICES_CATALOG } from '../data/zoventsData';

interface FooterNavProps {
  onNavigate: (path: string) => void;
  onOpenProposal: () => void;
}

export const FooterNav: React.FC<FooterNavProps> = ({ onNavigate, onOpenProposal }) => {
  return (
    <footer className="bg-[#1C0409] text-white pt-20 pb-12 border-t border-[#350710] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Top Proposal Trigger */}
        <div className="pb-16 mb-16 border-b border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">


          <button
            onClick={onOpenProposal}
            className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-8 py-4 flex items-center gap-3 transition-all cursor-pointer shadow-lg hover:shadow-xl group"
          >
            <span>Request a Proposal</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Get in Touch & Brand */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <button 
                onClick={() => onNavigate('/')}
                className="font-serif text-3xl font-bold tracking-wider text-white inline-block mb-4 text-left cursor-pointer"
              >
                ZOVENT
              </button>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-8 max-w-sm">
                Full-spectrum corporate event management, MICE programmes, and luxury travel — across cities worldwide.
              </p>

              <div className="space-y-3 text-xs tracking-wider">
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC]">
                  [ GET IN TOUCH ]
                </p>
                <a 
                  href={`mailto:${SITE_INFO.email}`} 
                  className="flex items-center gap-2.5 text-white/85 hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-[#D7B4BC]" />
                  <span>{SITE_INFO.email.toUpperCase()}</span>
                </a>
                <a 
                  href={`tel:${SITE_INFO.phone}`} 
                  className="flex items-center gap-2.5 text-white/85 hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-[#D7B4BC]" />
                  <span>{SITE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-5">
              [ NAVIGATE ]
            </p>
            <ul className="space-y-3 text-xs tracking-wider text-white/75">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/services/conferences')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/holiday')} className="hover:text-white transition-colors cursor-pointer">
                  Holiday
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/payment')} className="hover:text-white transition-colors cursor-pointer">
                  Payment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-5">
              [ SERVICES ]
            </p>
            <ul className="space-y-3 text-xs tracking-wider text-white/75">
              {SERVICES_CATALOG.map((svc) => (
                <li key={svc.slug}>
                  <button 
                    onClick={() => onNavigate(`/services/${svc.slug}`)} 
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offices & Follow */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-4">
                [ OFFICES ]
              </p>
              <div className="space-y-2 text-xs tracking-wider text-white/75">
                <p className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#D7B4BC]" />
                  <span className="font-semibold text-white">GURUGRAM</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={12} className="text-[#D7B4BC]" />
                  <span className="font-semibold text-white">KOLKATA</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-3">
                [ FOLLOW ]
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-white/80">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Ig
                </a>
                <span>·</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  In
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Giant Brand Wordmark */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row items-baseline justify-between gap-6 border-b border-white/10">
          <div className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold tracking-tight text-white/95 leading-none select-none">
            ZOVENT
          </div>

          <div className="font-serif italic text-base sm:text-lg lg:text-xl text-[#E3CBD2] max-w-xs md:text-right font-light">
            We turn ideas into experiences.
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wider text-white/50">
          <p>© 2026 ZOVENT Pvt. Ltd. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => onNavigate('/legal/privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('/legal/terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Use
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('/legal/refunds')} className="hover:text-white transition-colors cursor-pointer">
              Refunds & Cancellations
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
