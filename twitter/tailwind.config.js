/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#ff7a00',
          hoverBtn: '#eff3f41a',
          hoverBg: '#e66e00',
          blue: {
            500: '#1d9bf0',
          },
          divider: '#2f3336',
        },
        gray: {
          500: '#71767b',
        },
      },
      boxShadow: {
        popover:
          'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
      },
    },
  },
  plugins: [],
};
