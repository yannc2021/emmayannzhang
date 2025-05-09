/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/layouts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D66BA0', // Warm rose pink
        secondary: '#9E7CF4', // Soft lavender
        accent: '#5BCEFA', // Bright sky blue
        dark: '#2D3047', // Deep navy
        light: '#F9F5FF', // Soft white with hint of lavender
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 