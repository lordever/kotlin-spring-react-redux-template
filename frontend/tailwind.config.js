/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'preset-1': [
          '50px',
          {
            lineHeight: '110%',
            letterSpacing: '-0.5px',
            fontWeight: '700',
          },
        ],
        'preset-2': [
          '28px',
          {
            lineHeight: '130%',
            letterSpacing: '-0.3px',
            fontWeight: '700',
          },
        ],
        'preset-3': [
          '16px',
          {
            lineHeight: '165%',
            letterSpacing: '0px',
            fontWeight: '500',
          },
        ],
        'preset-4-bold': [
          '15px',
          {
            lineHeight: '175%',
            letterSpacing: '0.25px',
            fontWeight: '700',
          },
        ],
        'preset-4-semibold': [
          '15px',
          {
            lineHeight: '175%',
            letterSpacing: '2px',
            fontWeight: '600',
          },
        ],
        'preset-4': [
          '15px',
          {
            lineHeight: '175%',
            letterSpacing: '0.25px',
            fontWeight: '400',
          },
        ],
        'preset-5-bold': [
          '11px',
          {
            lineHeight: '190%',
            letterSpacing: '0px',
            fontWeight: '700',
          },
        ],
        'preset-5-medium': [
          '11px',
          {
            lineHeight: '190%',
            letterSpacing: '0px',
            fontWeight: '500',
          },
        ],
        'preset-5-italic': [
          '11px',
          {
            lineHeight: '155%',
            letterSpacing: '0px',
            fontWeight: '500',
          },
        ],
      },
      colors: {
        'gray-900': '#3D3B48',
        'gray-200': '#DEDEDE',
        'green-400': '#38CC8B',
        'green-300': '#77E2B3',
        'red-400': '#FF7979',
        'purple-700': '#5E54A4',
        'purple-400': '#A6A1CF',
        'purple-350': '#BAB7D4',
      },
    },
  },
  plugins: [],
};
