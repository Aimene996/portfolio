'use client';

import { useState, useEffect } from 'react';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => scrollToSection('contact')}
      className="fixed bottom-6 right-6 z-50 bg-[#FF6B9D] text-white px-6 py-3 rounded-full font-semibold 
                hover:bg-[#FF5A8A] transition-all shadow-2xl hover:shadow-[#FF6B9D]/50
                transform hover:scale-110 duration-200 text-base
                flex items-center gap-2 animate-pulse hover:animate-none"
      aria-label="Hire Me"
    >
      <span>Hire Me</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>
  );
}

