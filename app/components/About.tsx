'use client';

import ScrollReveal from './ScrollReveal';
import CounterAnimation from './CounterAnimation';

export default function About() {
  const skills = [
    { name: 'Flutter', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js / React', level: 90, color: 'from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600' },
    { name: 'Firebase', level: 88, color: 'from-orange-400 to-orange-600' },
    { name: 'Supabase', level: 85, color: 'from-emerald-400 to-emerald-600' },
    { name: 'TypeScript', level: 88, color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-900/50 transition-colors duration-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B9D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FFB347]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B9D] to-[#FFB347] mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Stats counters - accounting style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <ScrollReveal delay={100}>
            <CounterAnimation
              end={6}
              suffix="+"
              label="Projects Delivered"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <CounterAnimation
              end={3}
              suffix="+"
              label="Years Experience"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <CounterAnimation
              end={10}
              suffix="+"
              label="Technologies"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <CounterAnimation
              end={100}
              suffix="%"
              label="Client Satisfaction"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              }
            />
          </ScrollReveal>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
              I&apos;m a passionate mobile &amp; web developer specializing in Flutter and Next.js development. 
              With expertise in Firebase, Supabase, and cloud technologies, I build scalable, high-performance 
              applications that deliver exceptional user experiences.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
              From SaaS platforms and POS systems to booking apps and content management tools — 
              I focus on clean code, modern architectures, and creating products that users love 
              and businesses rely on.
            </p>
          </ScrollReveal>

          {/* Skill bars with animation */}
          <ScrollReveal delay={300}>
            <div className="mt-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-6 text-center sm:text-left flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#FF6B9D] to-[#FFB347] rounded-full" />
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <ScrollReveal key={skill.name} delay={400 + index * 100}>
                    <div className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-800 dark:text-slate-200 group-hover:text-[#FF6B9D] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-[#FF6B9D]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'skillFill 1.5s ease-out forwards',
                          }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tech stack tags */}
          <ScrollReveal delay={500}>
            <div className="mt-8 sm:mt-10">
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                {['Flutter', 'Next.js', 'React', 'Firebase', 'Supabase', 'TypeScript', 'Dart', 'Node.js', 'PostgreSQL', 'Prisma'].map((tech, i) => (
                  <span 
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 
                               rounded-lg font-medium text-sm border border-gray-200 dark:border-slate-700
                               hover:border-[#FF6B9D] hover:text-[#FF6B9D] hover:shadow-md hover:shadow-[#FF6B9D]/10
                               transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
