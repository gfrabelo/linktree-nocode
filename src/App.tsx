import React from 'react';
import { Background } from './components/Background';
import { FallingEmojis } from './components/FallingEmojis';
import { SocialButton } from './components/SocialButton';
import { Footer } from './components/Footer';
import {
  Youtube,
  Zap,
  Rocket,
  TrendingUp,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react';
import profileImage from './assets/images/profile.jpg';

function App() {
  const links = [
    {
      icon: Youtube,
      label: 'YouTube - Conteúdo sobre IA e Tecnologia',
      description: 'Acompanhe minha jornada e aprenda comigo',
      href: 'https://youtube.com/@GabrielRabeloIA',
      highlight: true,
    },
    {
      icon: Zap,
      label: 'Zenflow - Controle Financeiro pelo WhatsApp',
      description: 'Ferramenta que uso para organizar minhas finanças',
      href: 'http://demo.zenflow.pro/',
      highlight: true,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      description: 'Acompanhe meu dia a dia e dicas de IA',
      href: 'https://instagram.com/gabrielrabelob',
      highlight: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Conecte-se e construa sua rede profissional',
      href: 'https://www.linkedin.com/in/gabrielrabelob/',
      highlight: false,
    },
    {
      icon: Mail,
      label: 'Email',
      description: 'Entre em contato para parcerias',
      href: 'mailto:gabrielrabelob@gmail.com',
      highlight: false,
    },
  ];

  return (
    <>
      <Background />
      <FallingEmojis />
      <div className="relative min-h-screen flex flex-col items-center px-4 py-16 text-white z-10">
        <main className="w-full max-w-md mx-auto relative z-10">
          <div className="text-center mb-10 relative z-10">
            <div className="relative w-36 h-36 mx-auto mb-6 group z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 animate-pulse [animation-duration:3s] z-[5]" style={{ transform: 'scale(1.1)' }} />
              <img
                src={profileImage}
                alt="Gabriel Rabelo"
                className="rounded-full object-cover w-full h-full border-4 border-blue-400/80 relative z-[10] shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              />
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 z-[20] animate-ping [animation-duration:3s]" />
            </div>
            <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200 bg-clip-text text-transparent relative z-10">
              Gabriel Rabelo
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
              <Rocket className="h-5 w-5 text-purple-400 relative z-10" />
              <h2 className="text-xl font-semibold text-blue-100 relative z-10">
                Arquitetura de Liberdade Digital
              </h2>
            </div>
            <p className="text-lg font-medium mb-2 text-blue-200 relative z-10">
              Como usar IA para ter mais tempo, dinheiro e autonomia
            </p>
            {/* <p className="text-blue-200/90 leading-relaxed relative z-10">
              • Dev que trocou escritórios por praias<br/>
              • Founder do ZenFlow<br/>
              • Builder público<br/>
              • Pai
            </p> */}
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-purple-300 relative z-10">
              <TrendingUp className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Dev Sênior compartilhando conhecimento</span>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            {links.map((link, index) => (
              <SocialButton key={index} {...link} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;