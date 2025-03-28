/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'primary':'#FFCE1A',
          'secondary':'#0D0842',
          'discount':'#6C6C6C',
          'blackBG':'#F3F3F3',
          'Favorite':'#FF5841'
        },
        FontFamily:{
          'primary':["Montserrat", "sans-serif"],
          'secondary':["Nunito Sans","sans-serif"]
        }
      },
    },
    plugins: [],
  }
  
  
  