/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },

        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        }
      },
  
      animation: {
        'slide-in': 'slideIn 1s ease-out',
        'open-menu' :  'open-menu 0.5 ease-in-out forwards',
      },
    },
  },
  
  plugins: [],
}

