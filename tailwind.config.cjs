/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
    'mn': '575px',
    'sm': '640px',
    'md': '768px',
    '2md': '991px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1280px',
    '3xl': '1449px',
    
    //'3xl': {'max': '1535px'} // 3xl to sm,
    //...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        // colorName: '#dc2626',
        // bgName: '#dc2626',
        // bg-bgName
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        //mono: ["'fontName'", ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
};