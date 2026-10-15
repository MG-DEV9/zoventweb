/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { FooterNav } from './components/FooterNav';
import { ProposalModal } from './components/ProposalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { HolidayPage } from './pages/HolidayPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PaymentPage } from './pages/PaymentPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LegalPage } from './pages/LegalPage';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminPayments } from './pages/admin/AdminPayments';
import { getAdminToken } from './pages/admin/adminAuth';

import { SERVICES_CATALOG, BLOG_POSTS } from './data/zoventsData';

export default function App() {
  // Support state-based path that initializes from window.location.hash or pathname
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        return window.location.hash.slice(1);
      }
      if (window.location.pathname && window.location.pathname !== '/') {
        return window.location.pathname;
      }
    }
    return '/';
  });

  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Sync with browser history popstate
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProposal = (service?: string) => {
    setPrefilledService(service);
    setProposalModalOpen(true);
  };

  // Route resolution
  const renderCurrentPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '' || currentPath === '/home') {
      return (
        <HomePage 
          onNavigate={handleNavigate} 
          onOpenQuote={(svc) => handleOpenProposal(svc)} 
        />
      );
    }

    // 2. About
    if (currentPath === '/about') {
      return (
        <AboutPage 
          onNavigate={handleNavigate} 
          onOpenQuote={() => handleOpenProposal()} 
        />
      );
    }

    // 3. Service Detail (/services/:slug or /services)
    if (currentPath === '/services' || currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace('/services', '');
      const matchedService = SERVICES_CATALOG.find(s => s.slug === slug) || SERVICES_CATALOG[0];
      return (
        <ServiceDetailPage 
          service={matchedService} 
          onNavigate={handleNavigate} 
          onOpenQuote={(svcTitle) => handleOpenProposal(svcTitle)} 
        />
      );
    }

    // 5. Holiday
    if (currentPath === '/holiday' || currentPath === '/holidays') {
      return (
        <HolidayPage 
          onOpenQuote={(destTitle) => handleOpenProposal(destTitle)} 
        />
      );
    }

    // 6. Gallery
    if (currentPath === '/gallery') {
      return (
        <GalleryPage 
          onOpenQuote={(proj) => handleOpenProposal(proj)} 
        />
      );
    }

    // 7. Contact
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // 8. Payment (/payment or /payment/:paymentId)
    if (currentPath === '/payment' || currentPath.startsWith('/payment/')) {
      const ref = currentPath.startsWith('/payment/') ? currentPath.replace('/payment/', '') : undefined;
      return <PaymentPage initialReference={ref} onNavigate={handleNavigate} />;
    }

    // 9. Blog Overview
    if (currentPath === '/blog') {
      return <BlogListPage onNavigate={handleNavigate} />;
    }

    // 10. Blog Individual Post (/blog/:slug)
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const matchedPost = BLOG_POSTS.find(p => p.slug === slug);
      if (matchedPost) {
        return (
          <BlogPostPage 
            post={matchedPost} 
            onNavigate={handleNavigate} 
            onOpenQuote={() => handleOpenProposal()} 
          />
        );
      }
      return <BlogListPage onNavigate={handleNavigate} />;
    }

    // 11. Legal Pages
    if (currentPath === '/legal/privacy' || currentPath === '/privacy') {
      return <LegalPage type="privacy" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/legal/terms' || currentPath === '/terms') {
      return <LegalPage type="terms" onNavigate={handleNavigate} />;
    }
    if (currentPath === '/legal/refunds' || currentPath === '/refunds') {
      return <LegalPage type="refunds" onNavigate={handleNavigate} />;
    }

    // 12. Admin
    if (currentPath === '/admin/login') {
      return <AdminLogin onNavigate={handleNavigate} />;
    }
    if (currentPath === '/admin') {
      return getAdminToken() ? (
        <AdminPayments onNavigate={handleNavigate} />
      ) : (
        <AdminLogin onNavigate={handleNavigate} />
      );
    }

    // Fallback: Home
    return (
      <HomePage 
        onNavigate={handleNavigate} 
        onOpenQuote={(svc) => handleOpenProposal(svc)} 
      />
    );
  };

  const isAdminRoute = currentPath === '/admin' || currentPath === '/admin/login';

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1919] flex flex-col font-sans selection:bg-[#520818] selection:text-white">
      {/* Site-wide Top Header */}
      {!isAdminRoute && (
        <HeaderNav
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenProposalModal={(svc) => handleOpenProposal(svc)}
        />
      )}

      {/* Dynamic Page Router */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Site-wide Footer */}
      {!isAdminRoute && (
        <FooterNav
          onNavigate={handleNavigate}
          onOpenProposal={() => handleOpenProposal()}
        />
      )}

      {/* Proposal Request Modal Drawer */}
      <ProposalModal 
        isOpen={proposalModalOpen}
        prefillService={prefilledService}
        onClose={() => setProposalModalOpen(false)}
      />
    </div>
  );
}
