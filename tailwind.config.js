/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '--tw-shadow': 'inset 10px 0 10px -10px rgba(0, 0, 0, 0.5), inset -10px 0 10px -10px rgba(0, 0, 0, 0.5)',
        '--tw-shadow-colored': 'inset 10px 0 10px -10px var(--tw-shadow-color), inset -10px 0 10px -10px var(--tw-shadow-color)',
        'box-shadow': 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-400px)' },
        },
        slideInDesktop: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0)' },
        },
        scrollDesktop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: `translateX(-${960 * 3}px)` },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: `translateX(-${528 * 3}px)` },
        },
        heartPulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },          
        },
        heartPulseInverse: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },        
        },
      },
      animation: {
        slideIn: 'slideIn 5s ease-out infinite',
        slideInDesktop: 'slideInDesktop 4.9s ease-out infinite',
        heartPulse: 'heartPulse 1s ease-out',
        heartPulseInverse: 'heartPulseInverse 1s ease-out',
        scroll: 'scroll 35s linear infinite',
        scrollDesktop: 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
