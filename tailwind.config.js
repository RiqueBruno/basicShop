/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
