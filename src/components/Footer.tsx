import React from 'react';
import { SITE_INFO } from '../data/zoventsData';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#22040B] text-white pt-20 pb-12 border-t border-[#3B0714] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="font-serif text-2xl font-semibold tracking-wider text-white inline-block mb-4">
                ZOVENT
              </a>
              <p className="text-sm text-white/70 leading-relaxed max-w-sm font-light">
                Strategy, delivery and hospitality for events and travel — managed with precision, wherever the plan leads.
              </p>
            </div>
          </div>

          {/* Column: Services */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-5">
              Services
            </p>
            <ul className="space-y-3 text-xs tracking-wide text-white/75">
              <li>
                <button onClick={() => onNavigate('#corporate-events')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Corporate Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#corporate-events')} className="hover:text-white transition-colors cursor-pointer text-left">
                  M.I.C.E.
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#how-we-can-help')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Corporate Travel
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#private-holidays')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Holidays
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#how-we-can-help')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Social Occasions
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Company */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-5">
              Company
            </p>
            <ul className="space-y-3 text-xs tracking-wide text-white/75">
              <li>
                <button onClick={() => onNavigate('#how-we-can-help')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About ZOVENT
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#selected-work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#selected-work')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Partners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#contact-brief')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column: New Business */}
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D7B4BC] mb-5">
              New Business
            </p>
            <ul className="space-y-3 text-xs tracking-wide text-white/75">
              <li>
                <a href="mailto:hello@zovent.com" className="hover:text-white lowercase transition-colors">
                  info@zovent.com
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phoneDisplay}
                </a>
              </li>
              <li className="pt-2 text-white/60">
                kolkata · Delhi NCR ·
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Giant Brand Wordmark Section matching screenshot */}
        <div className="pt-12 pb-8 flex flex-col md:flex-row items-baseline justify-between gap-6 border-b border-white/10">
          <div className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] font-bold tracking-tight text-white/95 leading-none select-none">
            ZOVENT
          </div>

          <div className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#E3CBD2] max-w-xs md:text-right font-light">
            Considered from the first conversation.
          </div>
        </div>

        {/* Legal & Socials Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider text-white/50">
          <p>© 2026 ZOVENT. ALL RIGHTS RESERVED.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
