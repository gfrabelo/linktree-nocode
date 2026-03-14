import React, { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

type AccentColor = 'primary' | 'secondary' | 'tertiary' | 'success';

const accentMap: Record<AccentColor, { hex: string; rgb: string; borderHex: string }> = {
  primary:   { hex: '#6366F1', rgb: '99,102,241',  borderHex: 'rgba(99,102,241,0.5)' },
  secondary: { hex: '#8B5CF6', rgb: '139,92,246',  borderHex: 'rgba(139,92,246,0.5)' },
  tertiary:  { hex: '#06B6D4', rgb: '6,182,212',   borderHex: 'rgba(6,182,212,0.5)'  },
  success:   { hex: '#10B981', rgb: '16,185,129',  borderHex: 'rgba(16,185,129,0.5)' },
};

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  description?: string;
  accent?: AccentColor;
}

export function SocialButton({
  href,
  icon: Icon,
  label,
  description,
  accent = 'primary',
}: SocialButtonProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const { hex, rgb, borderHex } = accentMap[accent];

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x, y });
  };

  return (
    <div className="perspective-container">
      <a
        ref={cardRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="card-3d glass-card shimmer-effect group relative flex items-center gap-4 rounded-2xl px-5 py-4 text-white overflow-hidden"
        style={{
          boxShadow: hovered
            ? `0 25px 50px -12px rgba(${rgb},0.25), 0 0 0 1px ${borderHex}`
            : '0 4px 30px rgba(0,0,0,0.1)',
          borderTopColor: hovered ? borderHex : undefined,
          transition: 'all 0.4s cubic-bezier(0.25,0.8,0.25,1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Mouse-tracked radial glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(${rgb},0.12) 0%, transparent 60%)`,
          }}
        />

        {/* Top border accent line on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] rounded-t-2xl transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `linear-gradient(to right, transparent, ${hex}, transparent)`,
          }}
        />

        {/* Icon wrapper */}
        <div
          className="relative flex-shrink-0 rounded-xl p-2.5 transition-all duration-400"
          style={{
            background: hovered
              ? `rgba(${rgb},0.15)`
              : 'rgba(255,255,255,0.04)',
            border: `1px solid rgba(${rgb},${hovered ? '0.3' : '0.1'})`,
            boxShadow: hovered ? `0 0 16px rgba(${rgb},0.25)` : 'none',
          }}
        >
          <Icon
            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            style={{ color: hovered ? hex : '#94A3B8' }}
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div
            className="font-semibold text-sm leading-snug transition-colors duration-300"
            style={{ color: hovered ? '#F8FAFC' : '#CBD5E1' }}
          >
            {label}
          </div>
          {description && (
            <div
              className="text-xs mt-0.5 transition-colors duration-300 truncate"
              style={{ color: hovered ? '#94A3B8' : '#64748B' }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Arrow */}
        <div
          className="flex-shrink-0 transition-all duration-300"
          style={{
            color: hovered ? hex : '#334155',
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>
    </div>
  );
}
