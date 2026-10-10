import React, { useState } from 'react';
import { ArrowUpRight, Clock, Calendar, User } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/zoventsData';

interface BlogListPageProps {
  onNavigate: (path: string) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'EVENT PLANNING', 'INDUSTRY TRENDS', 'TRAVEL', 'CORPORATE CULTURE'];

  const filteredPosts = activeCategory === 'ALL'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(b => b.category === activeCategory);

  const featured = BLOG_POSTS[0];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      
      {/* Header */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-[#E8E2D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8485] mb-4">
            [ INSIGHTS & IDEAS ]
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E1919] font-normal leading-[1.08] mb-6">
            THE BLOG.
          </h1>
          <p className="text-base sm:text-lg text-[#524B4C] max-w-2xl mx-auto leading-relaxed">
            Expert guides, industry analysis, destination intelligence, and strategic playbooks for corporate event planners and executives.
          </p>
        </div>
      </section>

      {/* Featured Hero Article */}
      <section className="py-12 lg:py-16 max-w-[1440px] mx-auto px-6 lg:px-12 border-b border-[#E8E2D9]">
        <div 
          onClick={() => onNavigate(`/blog/${featured.slug}`)}
          className="bg-[#FCFBF8] border border-[#E3DDD4] p-8 sm:p-12 group cursor-pointer hover:border-[#520818] transition-all hover:shadow-xl"
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#8C8485] mb-4">
            <span className="text-[#520818] font-bold">[ {featured.category} ]</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
            <span>·</span>
            <span>FEATURED GUIDE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1919] font-normal leading-tight mb-4 group-hover:text-[#520818] transition-colors max-w-4xl">
            {featured.title}
          </h2>

          <p className="text-sm sm:text-base text-[#524B4C] leading-relaxed max-w-3xl mb-8">
            {featured.summary}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-[#EDE8E1]">
            <p className="text-xs text-[#736B6C]">
              By <span className="font-semibold text-[#1E1919]">{featured.author}</span> · {featured.date}
            </p>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#520818] group-hover:translate-x-1 transition-transform">
              <span>Read Full Guide</span>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Bar matching transcript */}
      <div className="bg-[#FAF8F5] sticky top-20 z-30 border-b border-[#E8E2D9] py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#8C8485] font-bold mr-2 hidden sm:inline">
              [ CATEGORY ]
            </span>
            <div className="flex items-center gap-2 flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat
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
            {filteredPosts.length} ARTICLES
          </span>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              onClick={() => onNavigate(`/blog/${post.slug}`)}
              className="bg-[#FCFBF8] border border-[#E5DFD5] p-8 flex flex-col justify-between group cursor-pointer hover:border-[#520818] transition-all hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#8C8485] font-semibold mb-3">
                  <span className="text-[#520818] font-bold">[ {post.category} ]</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#1E1919] font-normal leading-snug mb-3 group-hover:text-[#520818] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-[#5C5556] leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                <span className="text-[11px] text-[#7A7374]">
                  {post.author} · {post.date}
                </span>
                <ArrowUpRight size={15} className="text-[#8C8485] group-hover:text-[#520818] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
