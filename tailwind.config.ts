import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        'primary-dark': '#B8860B',
        'primary-light': '#FFD700',
        'dark-bg': '#0F1419',
        'dark-card': '#1a222e',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
