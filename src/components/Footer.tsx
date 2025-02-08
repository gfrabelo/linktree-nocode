import React from 'react';
import { Github, Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

export function Footer() {
  const socials = [
    { icon: Github, href: 'https://github.com/gfrabelo' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gabrielrabelob/' },
    { icon: Instagram, href: 'https://instagram.com/gabrielrabelob' },
    { icon: Youtube, href: 'https://youtube.com/@gabrielrabelo3081' },
    { icon: Mail, href: 'mailto:gabrielrabelob@gmail.com' },
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
              className="transition-colors hover:text-blue-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
      <p>Designed by Gabriel Rabelo | © 2025</p>
    </footer>
  );
}