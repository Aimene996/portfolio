export default function DecorativeShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Triangle */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400/60 dark:bg-blue-500/40 rounded-sm transform rotate-45 animate-pulse" />
      
      {/* Circle */}
      <div className="absolute top-20 sm:top-32 right-8 sm:right-16 w-5 h-5 sm:w-6 sm:h-6 bg-orange-400/60 dark:bg-orange-500/40 rounded-full animate-bounce" />
      
      {/* Rounded Square */}
      <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-20 w-8 h-8 sm:w-10 sm:h-10 bg-pink-400/60 dark:bg-pink-500/40 rounded-lg transform -rotate-12" />
    </div>
  );
}

