/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'preset-1': [
          '56px',
          {
            lineHeight: '66px',
            letterSpacing: '0px',
            fontWeight: '300',
          },
        ],
        'preset-2': [
          '40px',
          {
            lineHeight: '47px',
            letterSpacing: '0px',
            fontWeight: '300',
          },
        ],
        'preset-3': [
          '32px',
          {
            lineHeight: '38px',
            letterSpacing: '0px',
            fontWeight: '300',
          },
        ],
        'preset-4': [
          '24px',
          {
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: '300',
          },
        ],
        'preset-5-medium': [
          '18px',
          {
            lineHeight: '21px',
            letterSpacing: '0px',
            fontWeight: '500',
          },
        ],
        'preset-5-regular': [
          '18px',
          {
            lineHeight: '21px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
        'preset-6': [
          '15px',
          {
            lineHeight: '18px',
            letterSpacing: '0px',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        'navy-950': '#0E1323',
        'navy-900': '#1C204B',
        'navy-800': '#33397A',
        'navy-200': '#BBC0FF',
        'orange-300': '#FF8B64',
        'purple-700': '#7335D2',
        'purple-600': '#5747EA',
        'purple-500': '#7078C9',
        'blue-300': '#55C2E6',
        'pink-400': '#FF5E7D',
        'green-400': '#4BCF82',
        'yellow-300': '#F1C75B',
        'grey-200': '#D8D8D8',
      }
    },
  },
  plugins: [],
};
