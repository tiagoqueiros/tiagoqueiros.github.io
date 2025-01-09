import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        outfit: ['var(--font-outfit)'],
      },
      animation: {
        'gradient': 'gradient 6s linear infinite',
        'expand': 'expand 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shine': 'shine 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'wave-slow': 'wave 3.5s ease-in-out infinite',
        'wave-reverse': 'wave-reverse 3s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'ripple': 'ripple 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'drift-slow': 'drift 30s linear infinite',
        'drift-slower': 'drift 40s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'move-x': 'move-x 20s linear infinite',
        'move-y': 'move-y 15s linear infinite',
        'move-diagonal': 'move-diagonal 25s linear infinite',
        'scale-pulse': 'scale-pulse 10s ease-in-out infinite',
        'wave-pulse': 'wave-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        expand: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: '0',
          },
          '20%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: '1',
          },
        },
        shine: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) skewX(-15deg)',
          },
          '10%': {
            opacity: '0.5',
          },
          '20%': {
            opacity: '0',
            transform: 'translateX(100%) skewX(-15deg)',
          },
          '100%': {
            opacity: '0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg) scale(1)' },
          '10%': { transform: 'rotate(14.0deg) scale(1.02)' },
          '20%': { transform: 'rotate(-8.0deg) scale(1)' },
          '30%': { transform: 'rotate(14.0deg) scale(1.02)' },
          '40%': { transform: 'rotate(-4.0deg) scale(1)' },
          '50%': { transform: 'rotate(10.0deg) scale(1.02)' },
          '60%': { transform: 'rotate(0.0deg) scale(1)' },
          '100%': { transform: 'rotate(0.0deg) scale(1)' },
        },
        'wave-reverse': {
          '0%': { transform: 'rotate(0.0deg) scale(1)' },
          '10%': { transform: 'rotate(-14.0deg) scale(1.02)' },
          '20%': { transform: 'rotate(8.0deg) scale(1)' },
          '30%': { transform: 'rotate(-14.0deg) scale(1.02)' },
          '40%': { transform: 'rotate(4.0deg) scale(1)' },
          '50%': { transform: 'rotate(-10.0deg) scale(1.02)' },
          '60%': { transform: 'rotate(0.0deg) scale(1)' },
          '100%': { transform: 'rotate(0.0deg) scale(1)' },
        },
        morph: {
          '0%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { 'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.5)', opacity: '0.2' },
          '100%': { transform: 'scale(1)', opacity: '0.4' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(50px, 25px) rotate(90deg)' },
          '50%': { transform: 'translate(100px, 50px) rotate(180deg)' },
          '75%': { transform: 'translate(50px, 25px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        'background-shine': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '-200% 50%' },
        },
        'move-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },
        },
        'move-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100px)' },
        },
        'move-diagonal': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'wave-pulse': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 