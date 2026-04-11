'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
}

export default function CounterAnimation({ 
  end, 
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
  icon
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div 
      ref={ref}
      className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 
                 border border-gray-200/50 dark:border-slate-700/50 
                 hover:border-[#FF6B9D]/50 dark:hover:border-[#FF6B9D]/50
                 shadow-lg hover:shadow-xl hover:shadow-[#FF6B9D]/10
                 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B9D]/0 to-[#FFB347]/0 
                      group-hover:from-[#FF6B9D]/5 group-hover:to-[#FFB347]/5 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="text-[#FF6B9D] mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-1 font-mono">
          {prefix}{count}{suffix}
        </div>
        <div className="text-sm text-gray-600 dark:text-slate-400 font-medium">
          {label}
        </div>
      </div>
    </div>
  );
}
