import React from 'react';
import { Background } from './components/Background';
import { SocialButton } from './components/SocialButton';
import { Footer } from './components/Footer';
import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-react';
import profileImage from './assets/images/profile.jpg';

function App() {
  const links = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gabrielrabelob/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gfrabelo',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: 'https://gabrielrabelo.vercel.app',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@gabrielrabelo3081',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/gabrielrabelob',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gabrielrabelob@gmail.com',
    },
  ];

  return (
    <>
      <Background />
      <div className="relative min-h-screen flex flex-col items-center px-4 py-16 text-white">
        <main className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 animate-pulse [animation-duration:3s]" style={{ transform: 'scale(1.05)' }} />
              <img
                src={profileImage}
                alt="Gabriel Rabelo"
                className="rounded-full object-cover w-full h-full border-2 border-blue-500 relative z-10"
              />
              <div className="absolute inset-0 rounded-full border border-blue-400/50 z-20" />
            </div>
            <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Gabriel Rabelo
            </h1>
            <h2 className="text-lg font-medium mb-2 text-blue-100">
              Front-end Developer & AI Enthusiast
            </h2>
            <p className="text-blue-200/80">
              Building innovative solutions and exploring the future of technology
            </p>
          </div>

          <div className="space-y-3">
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