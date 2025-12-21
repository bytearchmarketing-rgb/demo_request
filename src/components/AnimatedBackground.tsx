import { Circle, Triangle, Square, Hexagon } from 'lucide-react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50" />

      <div className="absolute top-20 right-10 animate-float opacity-20 hidden lg:block">
        <Circle className="w-32 h-32 text-orange-400" fill="currentColor" />
      </div>

      <div className="absolute bottom-20 left-10 animate-float-delayed opacity-15 hidden lg:block">
        <Triangle className="w-40 h-40 text-orange-400" fill="currentColor" />
      </div>

      <div className="absolute top-1/2 right-1/4 animate-float-slow opacity-10 hidden lg:block">
        <Square className="w-24 h-24 text-orange-400" fill="currentColor" />
      </div>

      <div className="absolute top-1/3 left-1/4 animate-float opacity-10 hidden lg:block">
        <Hexagon className="w-28 h-28 text-orange-400" fill="currentColor" />
      </div>

      <div className="absolute bottom-1/3 right-1/3 animate-float-delayed opacity-10 hidden lg:block">
        <Circle className="w-20 h-20 text-orange-300" fill="currentColor" />
      </div>
    </div>
  );
}
