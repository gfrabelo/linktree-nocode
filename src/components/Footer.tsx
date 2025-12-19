import React from 'react';
import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socials = [
    { icon: Youtube, href: 'https://youtube.com/@GabrielRabeloIA', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/gabrielrabelob', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gabrielrabelob/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gabrielrabelob@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="mt-auto py-6 text-center text-sm text-blue-200/60">
      <div className="mb-4 flex justify-center gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-400 hover:scale-110 transform duration-200"
              aria-label={social.label}
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
      <p className="text-blue-200/50">
        Construa seu império digital | © 2025 Gabriel Rabelo
      </p>
    </footer>
  );
}