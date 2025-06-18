/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'huly-dark': '#000000',
        'huly-dark-secondary': '#0a0a0a',
        'huly-light': '#f6f6f6',
        'huly-blue': '#478BEB',
        'huly-orange': '#FF5F0B',
        'huly-gradient': '#D1D4FA',
        'neon-orange': {
          DEFAULT: '#FF6B35',
          hover: '#FF8C5A',
          light: '#FFB088',
          dark: '#E54D1B',
        },
      },
      fontFamily: {
        'title': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(71, 139, 235, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(71, 139, 235, 0.8)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(71, 139, 235, 0.6)',
        'glow-orange': '0 0 15px rgba(255, 95, 11, 0.6)',
      },
    },
  },
  plugins: [],
}