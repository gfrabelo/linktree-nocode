/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        'bg-main':     '#020410',
        'bg-card':     '#0F111A',
        'bg-surface':  '#131520',
        'accent-primary':   '#6366F1',
        'accent-secondary': '#8B5CF6',
        'accent-tertiary':  '#06B6D4',
        'accent-success':   '#10B981',
        'accent-glow':      '#4F46E5',
        'text-primary':     '#F8FAFC',
        'text-secondary':   '#94A3B8',
        'text-muted':       '#64748B',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float':          'float 8s ease-in-out infinite',
        'float-avatar':   'float-avatar 6s ease-in-out infinite',
        'blob':           'blob 25s infinite',
        'pulse-glow':     'pulse-glow 3s ease-in-out infinite',
        'spin-slow':      'spin-slow 15s linear infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'reveal-up':      'reveal-up 1s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
};
