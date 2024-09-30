/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '360px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1921px',
    },
    extend: {
      colors: {
        primary: '#8067ff',
        'primary-hover': '#9782ff',
        button: '#c33fd7',
        'button-hover': '#d946ef',
        'primary-bg': '#00001a',
      },
    },
  },
  plugins: [],
}
