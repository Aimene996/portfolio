'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../data/projects';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextImage = () => {
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (index: number) => {
    setImageLoaded(false);
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setImageLoaded(false);
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
      if (e.key === 'ArrowRight') {
        setImageLoaded(false);
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'Escape') setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [project.images.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-20 pb-12 sm:pb-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-[#FF6B9D] hover:text-[#FF5A8A] mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full text-xs sm:text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Gallery - Professional Scrollable */}
        <div className="mb-8 sm:mb-12">
          <div className="relative bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden mb-3 sm:mb-4 shadow-xl" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
            {/* Main Image Display */}
            <div className="relative w-full h-full">
              {/* Fallback placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center z-0">
                <div className="text-center">
                  <span className="text-6xl block mb-2">📱</span>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Add project images to see them here</p>
                </div>
              </div>
              {/* Project image with smooth transitions */}
              <Image
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain cursor-pointer z-10 transition-all duration-500 ease-in-out"
                onClick={() => setIsFullscreen(true)}
                priority={currentImageIndex === 0}
                unoptimized
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>

                {/* Navigation Arrows - Professional Style */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 hover:bg-white dark:hover:bg-slate-800 rounded-full p-2 sm:p-4 shadow-xl transition-all hover:scale-110 z-20 border border-gray-200 dark:border-slate-700"
                      aria-label="Previous screenshot"
                    >
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 hover:bg-white dark:hover:bg-slate-800 rounded-full p-2 sm:p-4 shadow-xl transition-all hover:scale-110 z-20 border border-gray-200 dark:border-slate-700"
                      aria-label="Next screenshot"
                    >
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter - Professional Badge */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-black/80 dark:bg-slate-900/80 backdrop-blur-sm text-white px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-20">
                    Screenshot {currentImageIndex + 1} of {project.images.length}
                  </div>
                )}

                {/* Click to Fullscreen Hint */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/60 dark:bg-slate-900/60 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium z-20 backdrop-blur-sm hidden sm:block">
                  Click to view fullscreen
                </div>
          </div>

              {/* Thumbnail Navigation */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-[#FF6B9D] scale-105'
                          : 'border-transparent dark:border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center z-0">
                    <span className="text-xl">📱</span>
                  </div>
                  {/* Thumbnail image */}
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover z-10"
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4 sm:mb-6 flex items-center">
                <span className="w-1 h-6 sm:h-8 bg-[#FF6B9D] mr-2 sm:mr-3 rounded-full"></span>
                About This Project
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-4">{project.fullDescription}</p>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#FF6B9D]/5 dark:bg-[#FF6B9D]/10 rounded-lg border-l-4 border-[#FF6B9D]">
                <p className="text-sm sm:text-base text-gray-800 dark:text-slate-200 font-medium">
                  💡 <strong>Why This Matters:</strong> This project demonstrates expertise in building scalable SaaS platforms with modern technologies, API integrations, and AI capabilities - perfect for businesses looking to automate their social media presence.
                </p>
              </div>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="mb-6 sm:mb-8 bg-white dark:bg-slate-800 p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-100 dark:border-slate-700 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4 sm:mb-6 flex items-center">
                  <span className="w-1 h-6 sm:h-8 bg-[#FF6B9D] mr-2 sm:mr-3 rounded-full"></span>
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B9D] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 sm:p-6 sticky top-24 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="px-2 sm:px-3 py-1 bg-white dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4">Project Links</h3>
              <div className="space-y-2 sm:space-y-3">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#FF6B9D] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#FF5A8A] transition-colors shadow-lg text-sm sm:text-base"
                  >
                    View Live Demo
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gray-800 dark:bg-slate-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-slate-600 transition-colors duration-200 shadow-lg text-sm sm:text-base"
                  >
                    <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View GitHub Repo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* Fullscreen Modal */}
          {isFullscreen && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setIsFullscreen(false)}
            >
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 z-10 p-2"
                aria-label="Close"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative max-w-7xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-full max-h-[90vh]">
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center z-0">
                    <span className="text-6xl sm:text-9xl">📱</span>
                  </div>
                  {/* Fullscreen image */}
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain z-10"
                    priority
                    unoptimized
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-4 transition-all"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-4 transition-all"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>
          )}
    </div>
  );
}

