import { useEffect, useRef } from 'react';

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

// Design system hues: indigo≈239, violet≈263, cyan≈189
const DESIGN_HUES = [239, 250, 263, 220, 189];

function createBeam(width: number, height: number, index: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 28 + Math.random() * 55,
    length: height * 2.5,
    angle,
    speed: 0.5 + Math.random() * 0.9,
    opacity: 0.10 + Math.random() * 0.13,
    hue: DESIGN_HUES[index % DESIGN_HUES.length],
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.018 + Math.random() * 0.025,
  };
}

export function BeamsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cap DPR at 1.5 for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    // Fewer beams on mobile
    const isMobile = window.innerWidth < 768;
    const BEAM_COUNT = isMobile ? 10 : 18;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      beamsRef.current = Array.from({ length: BEAM_COUNT }, (_, i) =>
        createBeam(window.innerWidth, window.innerHeight, i)
      );
    };

    resize();
    window.addEventListener('resize', resize);

    function resetBeam(beam: Beam, index: number) {
      const col = index % 3;
      const spacing = window.innerWidth / 3;
      beam.y = window.innerHeight + 100;
      beam.x = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 80 + Math.random() * 90;
      beam.speed = 0.5 + Math.random() * 0.4;
      beam.hue = DESIGN_HUES[index % DESIGN_HUES.length];
      beam.opacity = 0.10 + Math.random() * 0.12;
      return beam;
    }

    function drawBeam(beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
      const grad = ctx.createLinearGradient(0, 0, 0, beam.length);
      grad.addColorStop(0,   `hsla(${beam.hue}, 80%, 65%, 0)`);
      grad.addColorStop(0.1, `hsla(${beam.hue}, 80%, 65%, ${pulsingOpacity * 0.5})`);
      grad.addColorStop(0.4, `hsla(${beam.hue}, 80%, 65%, ${pulsingOpacity})`);
      grad.addColorStop(0.6, `hsla(${beam.hue}, 80%, 65%, ${pulsingOpacity})`);
      grad.addColorStop(0.9, `hsla(${beam.hue}, 80%, 65%, ${pulsingOpacity * 0.5})`);
      grad.addColorStop(1,   `hsla(${beam.hue}, 80%, 65%, 0)`);

      ctx.fillStyle = grad;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, i);
        drawBeam(beam);
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Beams canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(12px)', willChange: 'transform' }}
      />

      {/* Static dark vignette — sem animação de opacity para evitar flicker */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(2,4,16,0.08)' }}
      />
    </>
  );
}
