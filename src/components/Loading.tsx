export function Loading() {
  return (
    <div className="flex items-center justify-center space-x-5 pt-20">
      {/* Dots */}
      <div className="flex space-x-1">
        <div className="w-3 h-3 rounded-full bg-gray-400 animate-dot-bounce animation-delay-0"></div>
        <div className="w-3 h-3 rounded-full bg-gray-400 animate-dot-bounce animation-delay-150"></div>
        <div className="w-3 h-3 rounded-full bg-gray-400 animate-dot-bounce animation-delay-300"></div>
      </div>
    </div>
  );
}
