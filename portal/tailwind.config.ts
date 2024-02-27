/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#daf1ff',
          200: '#DCEAFA',
          300: '#8fdbff',
          400: '#5bc4ff',
          500: '#35a8fc',
          600: '#1e8af2',
          700: '#1773e0', //point
          800: '#195bb4',
          900: '#1a4f8e',
          950: '#153156',
        },
        secondary: {
          50: '#fff9eb',
          100: '#ffeec6',
          200: '#fedd89',
          300: '#fec853', //point
          400: '#fdae22',
          500: '#f88b08',
          600: '#db6504',
          700: '#b64507',
          800: '#93350d',
          900: '#792c0e',
          950: '#461402',
        },
        grayscale: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#363636', //point
          950: '#262626',
        },
      },
      boxShadow: {
        primary: '0 4px 4px rgba(54,113,217,.25)',
      },
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fit, minmax(150px, 20%))',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
};
