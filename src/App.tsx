import React from 'react';
import { Background } from './components/Background';
import { SocialButton } from './components/SocialButton';
import { Footer } from './components/Footer';
import {
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Briefcase,
} from 'lucide-react';
import profileImage from './assets/images/profile.jpg';

const links = [
  {
    icon: Youtube,
    label: 'YouTube — Conteúdo sobre IA e Tecnologia',
    description: 'Acompanhe minha jornada e aprenda comigo',
    href: 'https://youtube.com/@GabrielRabeloIA',
    accent: 'primary' as const,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    description: 'Acompanhe meu dia a dia e dicas de IA',
    href: 'https://instagram.com/gabrielrabelob',
    accent: 'secondary' as const,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    description: 'Conecte-se e construa sua rede profissional',
    href: 'https://www.linkedin.com/in/gabrielrabelob/',
    accent: 'primary' as const,
  },
  {
    icon: Briefcase,
    label: 'Portfólio — Projetos e Cases',
    description: 'Veja meu trabalho completo em gfrabelo.github.io',
    href: 'https://www.gabrielrabelo.dev',
    accent: 'success' as const,
  },
  {
    icon: Mail,
    label: 'Email — Entre em contato',
    description: 'Parcerias e colaborações',
    href: 'mailto:gabrielrabelob@gmail.com',
    accent: 'secondary' as const,
  },
];

function Avatar() {
  return (
    <div className="animate-float-avatar relative mx-auto mb-8" style={{ width: 140, height: 140 }}>
      {/* Outer pulse ring */}
      <div
        className="animate-pulse-glow absolute rounded-full"
        style={{
          inset: -12,
          border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '9999px',
        }}
      />

      {/* Spinning gradient border */}
      <div
        className="animate-spin-slow absolute rounded-full"
        style={{
          inset: -4,
          background: 'linear-gradient(45deg, #6366F1, #06B6D4, #8B5CF6, #6366F1)',
          borderRadius: '9999px',
          filter: 'blur(8px)',
        }}
      />

      {/* Solid ring behind photo */}
      <div
        className="absolute rounded-full"
        style={{
          inset: -2,
          background: 'linear-gradient(45deg, #6366F1, #06B6D4, #8B5CF6)',
          borderRadius: '9999px',
        }}
      />

      {/* Photo */}
      <img
        src={profileImage}
        alt="Gabriel Rabelo"
        className="relative rounded-full object-cover"
        style={{
          width: 140,
          height: 140,
          boxShadow: '0 20px 60px rgba(99,102,241,0.3)',
          border: '3px solid #020410',
        }}
      />
    </div>
  );
}

function App() {
  return (
    <>
      <Background />

      <div className="relative min-h-screen flex flex-col items-center px-4 py-16" style={{ zIndex: 10 }}>
        <main className="w-full max-w-md mx-auto">

          {/* ── Header ───────────────────────────────── */}
          <div className="text-center mb-10">

            {/* Avatar */}
            <div className="animate-reveal-up delay-100">
              <Avatar />
            </div>

            {/* Name */}
            <div className="animate-reveal-up delay-200">
              <h1
                className="text-gradient-accent text-4xl font-extrabold tracking-tight mb-2"
                style={{ letterSpacing: '-0.03em' }}
              >
                Gabriel Rabelo
              </h1>
            </div>

            {/* Tagline */}
            <div className="animate-reveal-up delay-300">
              <p
                className="text-gradient-white text-xl font-semibold mb-3"
              >
                Arquitetura de Liberdade Digital
              </p>
            </div>

            {/* Description */}
            <div className="animate-reveal-up delay-400">
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Como usar IA para ter mais tempo, dinheiro e autonomia
              </p>
            </div>

            {/* Badge */}
            <div className="animate-reveal-up delay-500 mt-4 flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: '#A5B4FC',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full animate-pulse-glow"
                  style={{ background: '#10B981' }}
                />
                Dev Sênior · Builder Público
              </span>
            </div>
          </div>

          {/* ── Links ────────────────────────────────── */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <div
                key={link.href}
                className="animate-reveal-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <SocialButton {...link} />
              </div>
            ))}
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
