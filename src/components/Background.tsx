import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background with deeper, richer colors */}
      <div className="absolute inset-0 bg-[#0a0a1a]">
        {/* Animated gradient overlay with purple accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-purple-600/20 via-blue-900/15 to-transparent animate-gradient" />
        
        {/* Multiple glowing orb effects for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#0051ff40,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_80%,#9333ea30,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_20%_50%,#3b82f630,transparent)]" />
        
        {/* Enhanced futuristic grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:24px_24px] animate-[gridMove_20s_linear_infinite]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#9333ea15_1px,transparent_1px),linear-gradient(to_bottom,#9333ea15_1px,transparent_1px)] bg-[size:96px_96px]" />
        </div>
        
        {/* Enhanced glowing lines with animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 via-purple-500/40 to-transparent animate-pulse" />
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 via-blue-500/30 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse [animation-delay:0s]" />
          <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse [animation-delay:2s]" />
        </div>
      </div>
    </div>
  );
}