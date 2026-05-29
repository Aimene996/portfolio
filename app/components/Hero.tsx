'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SocialIcons, { 
  FacebookIcon, 
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon
} from './SocialIcons';
import DecorativeShapes from './DecorativeShapes';
import TypewriterText from './TypewriterText';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialIconsRow = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aimene-harbi-086a2b206/',
      icon: <LinkedInIcon className="w-5 h-5 text-blue-600" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Aimene996',
      icon: <GitHubIcon className="w-5 h-5 text-gray-800 dark:text-slate-200" />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ai.mene.610466/',
      icon: <FacebookIcon className="w-5 h-5 text-blue-600" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/213553446255',
      icon: <WhatsAppIcon className="w-5 h-5 text-green-600" />,
    },
  ];

  const floatingIcons = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aimene-harbi-086a2b206/',
      icon: <LinkedInIcon className="w-6 h-6 text-blue-600" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Aimene996',
      icon: <GitHubIcon className="w-6 h-6 text-gray-800 dark:text-slate-200" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/213553446255',
      icon: <WhatsAppIcon className="w-6 h-6 text-green-600" />,
    },
  ];

  const roles = [
    'Mobile Developer',
    'Full-Stack Engineer',
    'Flutter Expert',
    'SaaS Builder',
    'Cloud Architect',
  ];

  return (
    <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-slate-900 transition-colors duration-200 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B9D]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB347]/10 rounded-full blur-3xl animate-pulse-slow-delay" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Area */}
          <div className="space-y-4 sm:space-y-6 lg:pr-8 text-center lg:text-left">
            {/* Tagline with typing effect */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 border border-[#FF6B9D]/20"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              }}
            >
              <span className="w-2 h-2 bg-[#FF6B9D] rounded-full animate-pulse" />
              <TypewriterText 
                texts={roles}
                className="text-sm font-bold text-[#FF6B9D] uppercase tracking-wide"
              />
            </div>

            {/* Greeting */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-100 leading-tight"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
              }}
            >
              Hello, I am
            </h1>

            {/* Name with gradient */}
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-[#FF6B9D] via-[#FF8E72] to-[#FFB347] bg-clip-text text-transparent animate-gradient-x"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            >
              Aimene Harbi
            </h2>

            {/* Description */}
            <p 
              className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
              }}
            >
              I transform ideas into high-performance mobile and web applications. 
              Specializing in Flutter, Next.js, and Supabase, I help startups and 
              businesses build scalable apps that users love and businesses rely on.
            </p>

            {/* Tech badges */}
            <div 
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s',
              }}
            >
              {['Flutter', 'Next.js', 'Supabase', 'TypeScript', 'PostgreSQL'].map((tech, i) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 
                             rounded-md border border-gray-200 dark:border-slate-700 hover:border-[#FF6B9D] hover:text-[#FF6B9D] 
                             transition-all duration-300 cursor-default"
                  style={{ 
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            >
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-gradient-to-r from-[#FF6B9D] to-[#FF8E72] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-semibold 
                            shadow-lg shadow-[#FF6B9D]/25 hover:shadow-xl hover:shadow-[#FF6B9D]/40
                            transform hover:scale-105 duration-300 text-base sm:text-lg
                            overflow-hidden">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8E72] to-[#FFB347] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white dark:bg-slate-800 text-[#FF6B9D] border-2 border-[#FF6B9D] px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-semibold 
                            hover:bg-[#FF6B9D]/10 dark:hover:bg-[#FF6B9D]/20 transition-all shadow-lg hover:shadow-xl 
                            transform hover:scale-105 duration-300 text-base sm:text-lg">
                View My Work
              </button>
            </div>

            {/* Social Icons Row */}
            <div 
              className="pt-4 flex justify-center lg:justify-start"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
              }}
            >
              <SocialIcons icons={socialIconsRow} size="medium" />
            </div>
          </div>

          {/* Right Visual Area */}
          <div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            {/* Orange Semi-circular Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-lg max-h-lg bg-gradient-to-br from-[#FFB347] to-[#FFA07A] 
                            rounded-full opacity-90 transform -rotate-12 scale-110 animate-pulse-slow" 
                   style={{
                     clipPath: 'ellipse(80% 70% at 50% 50%)',
                   }}
              />
            </div>

            {/* Decorative tech code floating elements */}
            <div className="absolute top-8 left-4 text-[#FF6B9D]/20 dark:text-[#FF6B9D]/10 font-mono text-xs animate-float-slow">
              {'{ code: true }'}
            </div>
            <div className="absolute bottom-16 right-8 text-[#FFB347]/20 dark:text-[#FFB347]/10 font-mono text-xs animate-float-slow-delay">
              {'<Component />'}
            </div>
            <div className="absolute top-1/3 right-4 text-indigo-500/20 font-mono text-xs animate-float-slow">
              {'fn() => { }'}
            </div>

            {/* Decorative Shapes */}
            <DecorativeShapes />

            {/* Profile Image Container */}
            <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800
                            ring-4 ring-[#FF6B9D]/20 ring-offset-4 ring-offset-white dark:ring-offset-slate-900">
                {/* Fallback placeholder - only shows if image fails */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center z-0">
                  <div className="text-center">
                    <span className="text-6xl block mb-2">👤</span>
                    <p className="text-gray-500 dark:text-slate-400 text-xs">Add profile image</p>
                  </div>
                </div>
                {/* Your profile image */}
                <Image
                  src="/profile-image.jpg"
                  alt="Aimene Harbi - Mobile Developer"
                  fill
                  className="object-cover z-10"
                  priority
                  unoptimized
                  onError={(e) => {
                    // Hide image on error, show placeholder
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Floating Social Icons */}
            <SocialIcons 
              icons={[floatingIcons[0]]} 
              variant="floating"
              className="top-10 right-10 lg:top-20 lg:right-20 animate-float-slow"
              size="medium"
            />
            <SocialIcons 
              icons={[floatingIcons[1]]} 
              variant="floating"
              className="top-20 left-10 lg:top-32 lg:left-20 animate-float-slow-delay"
              size="medium"
            />
            <SocialIcons 
              icons={[floatingIcons[2]]} 
              variant="floating"
              className="bottom-20 right-16 lg:bottom-32 lg:right-32 animate-float-slow"
              size="medium"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">Scroll Down</span>
        <svg className="w-5 h-5 text-[#FF6B9D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
