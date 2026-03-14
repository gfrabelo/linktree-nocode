import React from 'react';
import { BeamsBackground } from './ui/beams-background';

export function Background() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -10, backgroundColor: '#020410' }}
    >
      {/* ── Layer 1: Beams (canvas + framer overlay) ────────────── */}
      <BeamsBackground />

      {/* ── Layer 2: Radial centre glow ─────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 25%, rgba(99,102,241,0.10), transparent 68%)',
        }}
      />

      {/* ── Layer 3: Animated blobs ──────────────────────────────── */}
      <div
        className="animate-blob absolute rounded-full"
        style={{
          width: 560,
          height: 560,
          top: '-12%',
          left: '-8%',
          background: 'rgba(99,102,241,0.14)',
          filter: 'blur(110px)',
          animationDelay: '0s',
        }}
      />
      <div
        className="animate-blob absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          bottom: '4%',
          right: '-6%',
          background: 'rgba(139,92,246,0.13)',
          filter: 'blur(100px)',
          animationDelay: '8s',
        }}
      />
      <div
        className="animate-blob absolute rounded-full"
        style={{
          width: 360,
          height: 360,
          top: '48%',
          left: '42%',
          background: 'rgba(6,182,212,0.08)',
          filter: 'blur(90px)',
          animationDelay: '16s',
        }}
      />

      {/* ── Layer 4: Bottom fade so content doesn't clash ──────── */}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background: 'linear-gradient(to top, #020410, transparent)',
        }}
      />
    </div>
  );
}
