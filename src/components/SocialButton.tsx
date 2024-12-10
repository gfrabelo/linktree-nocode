import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center gap-2 rounded-lg bg-blue-950/30 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-900/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-100"
    >
      <Icon className="h-5 w-5 text-blue-400" />
      <span>{label}</span>
      <div className="absolute inset-0 rounded-lg border border-blue-500/20 group-hover:border-blue-400/50" />
    </a>
  );
}