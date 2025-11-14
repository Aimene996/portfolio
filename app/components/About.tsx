export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#FF6B9D] mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
            I'm a passionate mobile developer specializing in Flutter development. 
            With expertise in Firebase and Supabase, I build scalable, high-performance 
            mobile applications that deliver exceptional user experiences.
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
            My tech stack includes Flutter for cross-platform development, Firebase for 
            backend services, and Supabase for modern database solutions. I focus on 
            clean code, best practices, and creating apps that users love.
          </p>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 sm:mb-4 text-center sm:text-left">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full font-semibold text-sm sm:text-base">Flutter</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full font-semibold text-sm sm:text-base">Firebase</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full font-semibold text-sm sm:text-base">Supabase</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full font-semibold text-sm sm:text-base">Dart</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B9D]/10 dark:bg-[#FF6B9D]/20 text-[#FF6B9D] rounded-full font-semibold text-sm sm:text-base">Mobile Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

