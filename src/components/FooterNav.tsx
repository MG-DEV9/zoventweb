import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const InstagramGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.07a5.13 5.13 0 1 0 0 10.26 5.13 5.13 0 0 0 0-10.26Zm0 8.46a3.33 3.33 0 1 1 0-6.66 3.33 3.33 0 0 1 0 6.66Zm5.34-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
  </svg>
);

const LinkedinGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);
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


        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Get in Touch & Brand */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <button
                onClick={() => onNavigate('/')}
                className="flex items-center gap-2.5 mb-4 text-left cursor-pointer hover:opacity-85 transition-opacity"
              >
                <span className="font-serif text-3xl font-bold tracking-wider text-white">
                  ZOVENT
                </span>
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
                  <span>{SITE_INFO.email.toLowerCase()}</span>
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
              <div className="space-y-4 text-xs tracking-wider text-white/75">
                {SITE_INFO.offices.map((office) => (
                  <div key={office.city} className="flex items-start gap-2">
                    <MapPin size={12} className="text-[#D7B4BC] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block">{office.city}</span>
                      <span className="text-white/55 text-[11px] leading-relaxed block">{office.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-3">
                [ FOLLOW ]
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                  <InstagramGlyph className="text-white" />
                </a>
                <span>·</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                  <LinkedinGlyph className="text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Giant Brand Wordmark */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row items-baseline justify-between gap-6 border-b border-white/10">
          <div className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold tracking-tight text-white/95 leading-none select-none">
            ZOVENT.
          </div>

          <div className="font-serif italic text-base sm:text-lg lg:text-xl text-[#E3CBD2] max-w-xs md:text-right font-light">
            We turn ideas into experiences.
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-wider text-white/50">
          <p>© 2026 ZOVENT Pvt. Ltd. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => onNavigate('/admin/login')} className="hover:text-white transition-colors cursor-pointer">
              Admin
            </button>
            <span>|</span>
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
