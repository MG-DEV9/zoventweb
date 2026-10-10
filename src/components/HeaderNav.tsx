import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, MessageSquare, Phone } from 'lucide-react';
import { SITE_INFO, SERVICES_CATALOG } from '../data/zoventsData';

interface HeaderNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProposalModal: (service?: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ currentPath, onNavigate, onOpenProposalModal }) => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLink = (path: string) => {
    setServicesMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services', hasDropdown: true },
    { label: 'BLOG', path: '/blog' },
    { label: 'HOLIDAY', path: '/holiday' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'PAYMENT', path: '/payment' },
  ];

  return (
    <>
      {/* Top Banner with WhatsApp Chat Link matching website spec */}
      <div className="bg-[#1E0409] text-white text-[11px] font-medium tracking-widest uppercase border-b border-[#350710]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#D7B4BC] hidden sm:inline">CORPORATE EVENTS · MICE · LUXURY TRAVEL</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a 
              href={SITE_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#9FE6A0] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageSquare size={13} className="text-[#4ADE80]" />
              <span>WHATSAPP — Chat With Us</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition-colors flex items-center gap-1">
              <Phone size={12} className="text-[#D7B4BC]" />
              <span>{SITE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <button 
            onClick={() => handleLink('/')}
            className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-[#1E1919] whitespace-nowrap hover:opacity-85 transition-opacity cursor-pointer text-left"
          >
            ZOVENT
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[12px] uppercase tracking-[0.16em] font-medium text-[#4A4545]">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                      onMouseEnter={() => setServicesMenuOpen(true)}
                      className={`flex items-center gap-1.5 py-2 cursor-pointer transition-colors group ${
                        currentPath.startsWith('/services') ? 'text-[#520818] font-semibold' : 'hover:text-[#1E1919]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={13} 
                        className={`transition-transform duration-200 text-[#8C8485] group-hover:text-[#1E1919] ${
                          servicesMenuOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {/* Services Submenu matching exact list */}
                    {servicesMenuOpen && (
                      <div 
                        onMouseLeave={() => setServicesMenuOpen(false)}
                        className="absolute top-full left-0 w-80 bg-[#FCFBF8] border border-[#E5DFD5] shadow-2xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                      >
                        {SERVICES_CATALOG.map((svc) => (
                          <button
                            key={svc.slug}
                            onClick={() => handleLink(`/services/${svc.slug}`)}
                            className="w-full flex items-center justify-between px-5 py-3 text-left text-xs uppercase tracking-wider text-[#3D3738] hover:bg-[#F3EFE8] hover:text-[#520818] transition-colors border-b border-[#F0EBE3] last:border-b-0 group cursor-pointer"
                          >
                            <span className="font-medium">{svc.title}</span>
                            <ArrowUpRight 
                              size={14} 
                              className="text-[#8A8282] group-hover:text-[#520818] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLink(link.path)}
                  className={`py-2 transition-colors cursor-pointer ${
                    isActive ? 'text-[#520818] font-semibold border-b-2 border-[#520818]' : 'hover:text-[#1E1919]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button matching [ START A PROJECT ] */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenProposalModal()}
              className="bg-[#520818] hover:bg-[#680B20] text-white text-xs uppercase font-medium tracking-widest px-6 py-3.5 flex items-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={() => onOpenProposalModal()}
              className="bg-[#520818] text-white text-[11px] uppercase tracking-wider px-3.5 py-2 flex items-center gap-1"
            >
              <span>Project</span>
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#E8E2D9] bg-[#FAF8F5] px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="py-2 border-b border-[#EFE9E0]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8485]">
                        Services
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 pl-2">
                      {SERVICES_CATALOG.map((svc) => (
                        <button
                          key={svc.slug}
                          onClick={() => handleLink(`/services/${svc.slug}`)}
                          className="flex items-center justify-between text-xs uppercase tracking-wider text-[#4A4545] py-2 text-left"
                        >
                          <span>{svc.title}</span>
                          <ArrowUpRight size={12} className="text-[#8C8485]" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => handleLink(link.path)}
                  className={`block w-full text-left text-sm uppercase tracking-wider font-medium py-2.5 border-b border-[#EFE9E0] ${
                    currentPath === link.path ? 'text-[#520818] font-bold' : 'text-[#3A3535]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1F3D24] text-[#86EFAC] text-xs uppercase font-medium tracking-wider py-3 px-4 flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                <span>WhatsApp — Chat With Us</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposalModal();
                }}
                className="w-full bg-[#520818] text-white text-xs uppercase font-medium tracking-widest py-3.5 text-center"
              >
                Start a Project ↗
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
