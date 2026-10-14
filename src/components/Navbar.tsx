import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, Phone } from 'lucide-react';
import { DROPDOWN_SERVICES } from '../data/content';
import { SITE_INFO } from '../data/zoventsData';

interface NavbarProps {
  onOpenEnquiry: (prefillService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <a 
          href="#" 
          className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-[#1E1919] whitespace-nowrap hover:opacity-85 transition-opacity"
        >
          ZOVENT
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] uppercase tracking-wider font-medium text-[#4A4545]">
          <button 
            onClick={() => handleNavClick('#how-we-can-help')}
            className="hover:text-[#1E1919] transition-colors py-2 cursor-pointer"
          >
            About
          </button>

          {/* Services with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1.5 hover:text-[#1E1919] transition-colors py-2 cursor-pointer group"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 text-[#736B6C] group-hover:text-[#1E1919] ${servicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu matching screenshot */}
            {servicesOpen && (
              <div 
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 w-72 bg-[#FCFBF8] border border-[#E5DFD5] shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                {DROPDOWN_SERVICES.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      handleNavClick(item.href);
                      setServicesOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-5 py-3 text-left text-xs uppercase tracking-wider text-[#3D3738] hover:bg-[#F3EFE8] hover:text-[#1E1919] transition-colors border-b border-[#F0EBE3] last:border-b-0 group"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ArrowUpRight 
                      size={14} 
                      className="text-[#8A8282] group-hover:text-[#520818] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('#private-holidays')}
            className="hover:text-[#1E1919] transition-colors py-2 cursor-pointer"
          >
            Holidays
          </button>

          <button 
            onClick={() => handleNavClick('#selected-work')}
            className="hover:text-[#1E1919] transition-colors py-2 cursor-pointer"
          >
            Our Work
          </button>

          <button 
            onClick={() => handleNavClick('#contact-brief')}
            className="hover:text-[#1E1919] transition-colors py-2 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA and Phone */}
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          <a
            href={`tel:${SITE_INFO.phone}`}
            className="text-xs font-medium tracking-wider text-[#635C5D] hover:text-[#1E1919] transition-colors flex items-center gap-1.5"
          >
            <Phone size={13} className="text-[#8C8485]" />
            <span>{SITE_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenEnquiry()}
            className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-5 py-3 flex items-center gap-2 transition-all hover:shadow-md cursor-pointer group"
          >
            <span>Plan with Us</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={() => onOpenEnquiry()}
            className="bg-[#520818] text-white text-[11px] uppercase tracking-wider px-3.5 py-2 flex items-center gap-1"
          >
            <span>Plan</span>
            <ArrowUpRight size={12} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2B2526] hover:bg-[#F2ECE3] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D9] bg-[#FAF8F5] px-6 py-6 space-y-4">
          <button
            onClick={() => handleNavClick('#how-we-can-help')}
            className="block w-full text-left text-sm uppercase tracking-wider font-medium text-[#3A3535] py-2 border-b border-[#EFE9E0]"
          >
            About
          </button>
          <div className="py-2 border-b border-[#EFE9E0]">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8C8485] mb-2">Services</p>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {DROPDOWN_SERVICES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center justify-between text-xs uppercase tracking-wider text-[#4A4545] py-1 text-left"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={12} className="text-[#8C8485]" />
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleNavClick('#private-holidays')}
            className="block w-full text-left text-sm uppercase tracking-wider font-medium text-[#3A3535] py-2 border-b border-[#EFE9E0]"
          >
            Holidays
          </button>
          <button
            onClick={() => handleNavClick('#selected-work')}
            className="block w-full text-left text-sm uppercase tracking-wider font-medium text-[#3A3535] py-2 border-b border-[#EFE9E0]"
          >
            Our Work
          </button>
          <button
            onClick={() => handleNavClick('#contact-brief')}
            className="block w-full text-left text-sm uppercase tracking-wider font-medium text-[#3A3535] py-2 border-b border-[#EFE9E0]"
          >
            Contact
          </button>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="text-xs font-medium text-[#635C5D] flex items-center gap-2"
            >
              <Phone size={14} />
              <span>{SITE_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#520818] text-white text-xs uppercase font-medium tracking-widest py-3 text-center"
            >
              Plan with Us ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
