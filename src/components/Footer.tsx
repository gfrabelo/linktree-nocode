import React, { useState } from 'react';
import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: Youtube,   href: 'https://youtube.com/@GabrielRabeloIA',         label: 'YouTube',   rgb: '99,102,241' },
  { icon: Instagram, href: 'https://instagram.com/gabrielrabelob',          label: 'Instagram', rgb: '139,92,246' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/gabrielrabelob/',   label: 'LinkedIn',  rgb: '99,102,241' },
  { icon: Mail,      href: 'mailto:gabrielrabelob@gmail.com',               label: 'Email',     rgb: '139,92,246' },
];

function SocialIcon({ icon: Icon, href, label, rgb }: typeof socials[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass-card relative flex items-center justify-center rounded-full w-10 h-10 transition-all duration-300"
      style={{
        boxShadow: hovered ? `0 0 20px rgba(${rgb},0.4)` : 'none',
        borderColor: hovered ? `rgba(${rgb},0.4)` : undefined,
        transform: hovered ? 'translateY(-3px) scale(1.1)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        className="h-4 w-4 transition-colors duration-300"
        style={{ color: hovered ? `rgb(${rgb})` : '#64748B' }}
      />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="mt-12 w-full max-w-md mx-auto relative z-10">
      {/* Divider */}
      <div className="border-t border-white/5 mb-6" />

      {/* Social icons */}
      <div className="flex justify-center gap-3 mb-5">
        {socials.map((s) => (
          <SocialIcon key={s.label} {...s} />
        ))}
      </div>

      {/* Copyright */}
      <p
        className="text-center text-xs pb-6"
        style={{ color: '#334155' }}
      >
        © 2025 Gabriel Rabelo · Compartilhando conhecimento
      </p>
    </footer>
  );
}
