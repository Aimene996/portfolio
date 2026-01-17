'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', section: null },
    { href: '/', label: 'About', section: 'about' },
    { href: '/', label: 'Portfolio', section: 'portfolio' },
    { href: '/', label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string | null) => {
    if (section && pathname === '/') {
      e.preventDefault();
      scrollToSection(section);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-slate-100 hover:text-[#FF6B9D] transition-colors duration-200">
            Aimene Harbi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.section)}
                className={`transition-colors duration-200 font-medium ${
                  pathname === link.href || (link.section && pathname === '/' && false)
                    ? 'text-[#FF6B9D] dark:text-[#FF6B9D]'
                    : 'text-gray-700 dark:text-slate-300 hover:text-[#FF6B9D] dark:hover:text-[#FF6B9D]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#FF6B9D] text-white px-4 py-2 rounded-full font-semibold 
                        hover:bg-[#FF5A8A] transition-colors shadow-md hover:shadow-lg 
                        transform hover:scale-105 duration-200 text-sm"
            >
              Hire Me
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.section);
                  setIsMenuOpen(false);
                }}
                className="block text-gray-700 dark:text-slate-300 hover:text-[#FF6B9D] dark:hover:text-[#FF6B9D] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#FF6B9D] text-white px-4 py-2.5 rounded-full font-semibold 
                        hover:bg-[#FF5A8A] transition-colors shadow-md mt-2"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

