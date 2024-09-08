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
      },
      animation: {
        slideIn: 'slideIn 5s ease-out infinite',
        slideInDesktop: 'slideInDesktop 4.9s ease-out infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
