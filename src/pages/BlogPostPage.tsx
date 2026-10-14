import React from 'react';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User, Share2 } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/zoventsData';
import { useSEO } from '../hooks/useSEO';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onNavigate, onOpenQuote }) => {
  useSEO({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    type: 'article',
  });

  const relatedPosts = BLOG_POSTS.filter(b => post.relatedSlugs.includes(b.slug));

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Header & Meta */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 max-w-4xl">
          
          <button
            onClick={() => onNavigate('/blog')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C8485] hover:text-[#520818] mb-8 cursor-pointer transition-colors"
          >
            <ArrowLeft size={14} />
            <span>BACK TO ALL ARTICLES</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[#8C8485] font-semibold mb-4">
            <span className="text-[#520818]">[ {post.category} ]</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1E1919] font-normal leading-[1.1] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-[#524B4C] font-light leading-relaxed mb-6">
            {post.summary}
          </p>

          <div className="pt-6 border-t border-[#E8E2D9] flex items-center justify-between text-xs text-[#736B6C]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1E1919]">{post.author}</span>
              <span>— Senior Event Strategist at Zovent</span>
            </div>
          </div>

        </div>
      </section>

      {/* Article Body Content */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="space-y-8 text-sm sm:text-base text-[#383334] leading-[1.8] font-normal">
            {post.content.map((paragraph, idx) => {
              // Check if paragraph starts with a heading-like uppercase line
              if (paragraph.startsWith('WHAT IS') || paragraph.startsWith('TYPES OF') || 
                  paragraph.startsWith('WHY ') || paragraph.startsWith('KEY STAGES') || 
                  paragraph.startsWith('CHOOSING ') || paragraph.startsWith('STEP-BY-STEP') ||
                  paragraph.startsWith('BREAKING DOWN') || paragraph.startsWith('HOW TO') ||
                  paragraph.startsWith('MICE IN') || paragraph.startsWith('MICE:') ||
                  paragraph.startsWith('BEST PRACTICES') || paragraph.startsWith('BUDGET RANGES') ||
                  paragraph.startsWith('FINAL THOUGHTS') || paragraph.startsWith('TOP PICKS') ||
                  paragraph.startsWith('CORE COMPONENTS') || paragraph.startsWith('IN-HOUSE VS') ||
                  paragraph.startsWith('IDEAS THAT') || paragraph.startsWith('HIGHLIGHTS')) {
                const lines = paragraph.split('\n\n');
                const heading = lines[0];
                const rest = lines.slice(1).join('\n\n');
                return (
                  <div key={idx} className="pt-4">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1919] font-normal mb-4">
                      {heading}
                    </h2>
                    {rest && (
                      <div className="whitespace-pre-line text-[#474142]">
                        {rest}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={idx} className="whitespace-pre-line text-[#474142]">
                  {paragraph}
                </div>
              );
            })}
          </div>

          {/* Author Box */}
          <div className="mt-16 pt-10 border-t border-[#E8E2D9] bg-[#FCFBF8] border p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[#520818] text-white flex items-center justify-center font-serif text-2xl shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[#8C8485] mb-1">
                Written by
              </p>
              <h3 className="font-serif text-2xl text-[#1E1919] font-normal mb-2">
                {post.author}
              </h3>
              <p className="text-xs text-[#5C5556] leading-relaxed">
                Senior Event Strategist at Zovent with 10+ years designing large-scale corporate events and MICE programmes across Asia and international markets.
              </p>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="mt-12 bg-[#520818] text-white p-8 sm:p-10 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-2xl sm:text-3xl font-normal mb-1">
                Planning your next corporate mandate?
              </h4>
              <p className="text-xs text-white/80">
                ZOVENT provides turnkey planning, venue vetting, and on-ground logistics nationwide.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="bg-white hover:bg-[#F2ECE3] text-[#1E1919] text-xs uppercase font-medium tracking-widest px-6 py-3.5 shrink-0 cursor-pointer"
            >
              Get a Quote →
            </button>
          </div>

          {/* Related Articles matching transcript */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#E8E2D9]">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8485] mb-6">
                [ RELATED ARTICLES ]
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.slug}
                    onClick={() => {
                      onNavigate(`/blog/${rel.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-[#E3DDD4] group cursor-pointer hover:border-[#520818] transition-all"
                  >
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-[#520818] mb-1">
                      [ {rel.category} ]
                    </p>
                    <h4 className="font-serif text-xl text-[#1E1919] font-normal group-hover:text-[#520818] transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[#520818] font-semibold flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowUpRight size={13} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
