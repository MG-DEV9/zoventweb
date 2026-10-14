import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, Phone } from 'lucide-react';
import { SITE_INFO, SERVICES_CATALOG } from '../data/zoventsData';

interface HeaderNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProposalModal: (service?: string) => void;
}

const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 14, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.145-.145.3-.374.45-.562.146-.187.194-.321.293-.52.099-.198.05-.371-.05-.52-.099-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.054 3.133 4.98 4.27 2.927 1.136 2.927.757 3.453.71.526-.05 1.758-.72 2.006-1.414.248-.694.248-1.288.173-1.414-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.82.49 3.53 1.34 5L2 22l5.17-1.36A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.17c-1.62 0-3.13-.46-4.41-1.26l-.32-.19-3.07.81.82-3-.2-.32a7.95 7.95 0 0 1-1.25-4.21c0-4.42 3.6-8.02 8.03-8.02 4.42 0 8.02 3.6 8.02 8.02 0 4.43-3.6 8.17-8.02 8.17z" />
  </svg>
);

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
    { label: 'HOLIDAY', path: '/holiday' },
    { label: 'BLOG', path: '/blog' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'CONTACT', path: '/contact' },
    { label: 'PAYMENT', path: '/payment' },
  ];

  return (
    <>
      {/* Top Banner with WhatsApp Chat Link matching website spec */}
      <div className="bg-[#520818] text-white text-[11px] font-medium tracking-widest uppercase border-b border-[#350710]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#D7B4BC] hidden sm:inline"> M.I.C.E · CORPORATE EVENTS · HOLIDAY</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a 
              href={SITE_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#9FE6A0] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <WhatsAppIcon size={13} className="text-[#4ADE80]" />
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
            className="flex items-center gap-2 hover:opacity-85 transition-opacity cursor-pointer text-left"
          >
            <img src="/images/logozv.png" alt="ZOVENT" className="h-12 md:h-14 w-auto" />

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
              <span>Request a Proposal</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={() => onOpenProposalModal()}
              className="bg-[#520818] text-white text-[11px] uppercase tracking-wider px-3.5 py-2 flex items-center gap-1"
            >
              <span>Request a Proposal</span>
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
                <WhatsAppIcon size={14} />
                <span>WhatsApp — Chat With Us</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposalModal();
                }}
                className="w-full bg-[#520818] text-white text-xs uppercase font-medium tracking-widest py-3.5 text-center"
              >
                Request a Proposal ↗
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
