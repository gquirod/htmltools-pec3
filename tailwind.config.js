/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7ca7f5',
        'primary-faded' :'#7ca7f54d',
        'primary-text': '#5178c2'
      },
      fontFamily: {
        comfortaa: 'Comfortaa, sans-serif'
      },
      fontSize: {
        '2.5xl': '1.75rem'
      },
      screens: {
        'md-1' : '900px',
        'md-2' : '992px'
      }
    },
  },
  plugins: [],
}

