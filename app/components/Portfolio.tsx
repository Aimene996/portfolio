'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-[#FF6B9D] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-slate-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-600/50 transition-all duration-200 group block border border-gray-200 dark:border-slate-700"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 bg-gray-100 dark:bg-slate-700 overflow-hidden">
                {/* Project thumbnail image - Primary display */}
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={project.id <= 2}
                      unoptimized
                      onError={(e) => {
                        // Show placeholder only on error
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                {/* Fallback placeholder - Hidden by default, shown only if image fails */}
                <div className="image-placeholder absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-4xl">📱</span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-20 pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-lg transition-opacity bg-black/50 px-4 py-2 rounded-lg">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-2 group-hover:text-[#FF6B9D] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
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
                <span className="text-[#FF6B9D] font-semibold group-hover:underline inline-flex items-center text-sm sm:text-base">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

