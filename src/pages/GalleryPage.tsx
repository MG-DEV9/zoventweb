import React, { useState } from 'react';
import { X, MapPin, Calendar, Users } from 'lucide-react';
import { GALLERY_PROJECTS, GalleryProject } from '../data/zoventsData';
import { useSEO } from '../hooks/useSEO';

interface GalleryPageProps {
  onOpenQuote: (projectName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenQuote }) => {
  useSEO({
    title: 'Event Gallery — Our Work',
    description: 'Explore ZOVENT\'s portfolio of corporate conferences, MICE programmes, offsites and curated travel experiences delivered across India.',
    path: '/gallery',
  });

  const [filter, setFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const categories = ['ALL', 'M.I.C.E.', 'TRAVEL'];

  const filteredProjects = filter === 'ALL' 
    ? GALLERY_PROJECTS 
    : GALLERY_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Header */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">
            [ OUR WORK ]
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-6">
            SELECTED WORK.
          </h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            A curation of recent corporate assemblies, MICE programmes, brand reveals, and executive retreats across India.
          </p>
        </div>
      </section>

      {/* Filter Bar matching transcript: [ FILTER ] ALL · CONFERENCES · MICE · OFFSITES · AWARDS · ACTIVATIONS · TRAVEL */}
      <div className="bg-[#FAF8F5] sticky top-20 z-30 border-b border-[#E8E2D9] py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#8C8485] font-bold mr-2 hidden sm:inline">
              [ FILTER ]
            </span>
            <div className="flex items-center gap-1.5 flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    filter === cat
                      ? 'bg-[#520818] text-white shadow-sm'
                      : 'bg-white border border-[#E5DFD5] text-[#524B4C] hover:bg-[#F0EBE1]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8485] whitespace-nowrap">
            {filteredProjects.length} PROJECTS
          </span>
        </div>
      </div>

      {/* 11 Projects Grid */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="bg-[#FCFBF8] border border-[#E5DFD5] group cursor-pointer hover:border-[#520818] transition-all hover:shadow-xl overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5DFD5]">
                <img
                  src={p.image}
                  alt={`${p.project} - ${p.city}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold text-[#520818] group-hover:bg-[#520818] group-hover:text-white transition-colors">
                  [ VIEW ]
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FCFBF8] border border-[#E3DDD4] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/9] w-full bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.project}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
