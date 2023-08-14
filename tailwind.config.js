/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
       'prims': '#c3ac73',
        'bl': '#1e429f'
    
      },
      fontFamily: {
        'pangram': ['Pangram']      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
