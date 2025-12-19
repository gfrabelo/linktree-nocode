import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  description?: string;
  highlight?: boolean;
}

export function SocialButton({ href, icon: Icon, label, description, highlight = false }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col gap-1 rounded-xl px-5 py-4 text-white transition-all duration-300 ${
        highlight 
          ? 'bg-gradient-to-r from-blue-950/50 via-purple-950/50 to-blue-950/50 hover:from-blue-900/60 hover:via-purple-900/60 hover:to-blue-900/60 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(147,51,234,0.4),0_0_20px_rgba(59,130,246,0.3)]' 
          : 'bg-blue-950/30 hover:bg-blue-900/40 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]'
      } active:scale-100 border border-blue-500/20 hover:border-purple-400/50`}
    >
      <div className="flex items-center gap-3">
        <div className={`relative ${highlight ? 'p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20' : ''}`}>
          <Icon className={`h-6 w-6 ${highlight ? 'text-purple-300' : 'text-blue-400'} group-hover:scale-110 transition-transform`} />
          {highlight && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
          )}
        </div>
        <div className="flex-1 text-left">
          <div className={`font-semibold ${highlight ? 'text-base' : 'text-sm'} text-white group-hover:text-blue-100 transition-colors`}>
            {label}
          </div>
          {description && (
            <div className="text-xs text-blue-200/70 mt-0.5 group-hover:text-blue-200/90 transition-colors">
              {description}
            </div>
          )}
        </div>
      </div>
      {highlight && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </a>
  );
}