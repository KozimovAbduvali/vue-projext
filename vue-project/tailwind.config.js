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
        'body': ['GT Sectra Fine Book',]
      },
      colors: {
        'primary': '#021D5D',
        brand: {
          dark: '#292835',
        }
      },
    },
  },
  plugins: [],
}