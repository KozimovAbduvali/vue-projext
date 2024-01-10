/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'base': '82.5rem'
      },
      fontFamily: {
        'body': ['GT Sectra Fine Book',],
        'roboto': ['Roboto Condensed', 'sans-serif']
      },
      fontSize: {
        'display': '2rem',
        'display-2': '3.4rem'
      },
      colors: {
        'primary': '#021D5D',
        'secondary': '#B89C67',
        'sky': '#DEE3EB',
        brand: {
          dark: '#292835',
        }
      },
      backgroundImage: {
        'hero-img': "url('./images/hero.png')",
      }
    },
  },
  plugins: [],
}