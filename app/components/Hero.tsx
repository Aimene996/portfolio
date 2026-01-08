'use client';

import Image from 'next/image';
import SocialIcons, { 
  FacebookIcon, 
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon
} from './SocialIcons';
import DecorativeShapes from './DecorativeShapes';

export default function Hero() {
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

  return (
    <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Area */}
          <div className="space-y-4 sm:space-y-6 lg:pr-8 text-center lg:text-left">
            {/* Tagline */}
            <p className="text-sm font-bold text-[#FF6B9D] uppercase tracking-wide">
              Mobile Developer
            </p>

            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-100 leading-tight">
              Hello, I am
            </h1>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF6B9D] leading-tight">
              Aimene Harbi
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Mobile developer specializing in Flutter, Firebase, and Supabase. 
              I create beautiful, performant mobile applications with modern architecture 
              and seamless user experiences.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#FF6B9D] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold 
                                hover:bg-[#FF5A8A] transition-colors shadow-lg hover:shadow-xl 
                                transform hover:scale-105 duration-200 text-sm sm:text-base">
                Hire me
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <SocialIcons icons={socialIconsRow} size="medium" />
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
            {/* Orange Semi-circular Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full max-w-lg max-h-lg bg-gradient-to-br from-[#FFB347] to-[#FFA07A] 
                            rounded-full opacity-90 transform -rotate-12 scale-110" 
                   style={{
                     clipPath: 'ellipse(80% 70% at 50% 50%)',
                   }}
              />
            </div>

            {/* Decorative Shapes */}
            <DecorativeShapes />

            {/* Profile Image Container */}
            <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
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
              className="top-10 right-10 lg:top-20 lg:right-20"
              size="medium"
            />
            <SocialIcons 
              icons={[floatingIcons[1]]} 
              variant="floating"
              className="top-20 left-10 lg:top-32 lg:left-20"
              size="medium"
            />
            <SocialIcons 
              icons={[floatingIcons[2]]} 
              variant="floating"
              className="bottom-20 right-16 lg:bottom-32 lg:right-32"
              size="medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

