/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'}, 
      'sm': {'max': '480px'},
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        'color-section': '#F8F8FA',
        'color-item': '#050038',
        'color-twitter': '#596068',
        'color-second': '#230B59',
        'color-second-link': '#4840BB'
      }
    },
  },
  plugins: [],
}
