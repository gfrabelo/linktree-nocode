import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background with stronger blue */}
      <div className="absolute inset-0 bg-[#020420]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-900/20 to-transparent animate-gradient" />
        
        {/* Glowing orb effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#0051ff,transparent)]" />
        
        {/* Futuristic grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a25_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a25_1px,transparent_1px)] bg-[size:96px_96px]" />
        </div>
        
        {/* Glowing lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}