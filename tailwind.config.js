/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constants/color.constants';
import plugin from 'tailwindcss/plugin.js';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: COLORS,
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.primary-gradient': {
          background: `linear-gradient(to top, ${theme('colors.yellow.700')}, ${theme('colors.yellow.300')})`,
        },
        '.secondary-gradient': {
          background: `linear-gradient(to top, ${theme('colors.brown.700')}, ${theme('colors.brown.300')})`,
        },
        '.gray-gradient': {
          background: `linear-gradient(to top, ${theme('colors.gray.500')}, ${theme('colors.gray.300')})`,
        },
      });
    }),
  ],
};
