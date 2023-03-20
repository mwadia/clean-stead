/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: '#00ADEE',
        purble: '#1D1D35',
        green: '#8FC930',
        heavyGreen: '#303C38',
        textGray: '#6D6E71',
        textGrayLight: '#7D7E82',
        bgGradientL: '#E5F7FD',
      },
      prefix: 'tw-',
    },
    screens: {
      sm: '640px',
      md: '835px',
      lg: '1024px',
      xl: '2080px',
    },
  },
  plugins: [],
};
