'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';
import ScrollReveal from './ScrollReveal';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#FF6B9D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-[#FFB347]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">My Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B9D] to-[#FFB347] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore my latest projects — from SaaS platforms and cloud POS systems to booking apps and mobile solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              delay={index * 120}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            >
              <Link
                href={`/portfolio/${project.id}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-slate-700/50 overflow-hidden 
                          hover:shadow-2xl hover:shadow-[#FF6B9D]/15 dark:hover:shadow-[#FF6B9D]/10 
                          transition-all duration-500 block border border-gray-200 dark:border-slate-700
                          hover:border-[#FF6B9D]/30 dark:hover:border-[#FF6B9D]/30
                          hover:-translate-y-2"
              >
                <div className="relative h-64 sm:h-72 lg:h-80 bg-gray-100 dark:bg-slate-700 overflow-hidden">
                  {/* Project thumbnail image */}
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={project.id <= 2}
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement;
                      if (placeholder) {
                        placeholder.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="image-placeholder absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-4xl">📱</span>
                  </div>
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Hover overlay with button */}
                  <div className="absolute inset-0 flex items-end justify-center pb-6 z-20 pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 
                                     text-white font-semibold text-sm transition-all duration-500 
                                     bg-[#FF6B9D] px-6 py-2.5 rounded-full shadow-lg shadow-[#FF6B9D]/25">
                      View Details →
                    </span>
                  </div>

                  {/* Live badge for projects with real links */}
                  {project.link && project.link !== '#' && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-[#FF6B9D] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 sm:px-3 py-1 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-full text-xs sm:text-sm">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FF6B9D] font-semibold group-hover:underline inline-flex items-center text-sm sm:text-base">
                      View Details →
                    </span>
                    {project.link && project.link !== '#' && (
                      <span className="text-xs text-gray-400 dark:text-slate-500 font-mono">
                        ● Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
