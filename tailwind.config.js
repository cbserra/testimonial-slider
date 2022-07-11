/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{js,html}'],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    extend: {
      backgroundImage:{
        'pattern-bg': "url('/images/pattern-bg.svg')",
        'pattern-curve': "url('/images/pattern-curve.svg')",
        'pattern-quotes': "url('/images/pattern-quotes.svg')",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      } ,
      colors: {
        'dark-blue': 'hsl(240, 38%, 20%)',
        'grayish-blue': 'hsl(240, 18%, 77%)'
      },
      fontSize: {
        'base': '62.5%',
        'quote': ['1.8rem', {
          lineHeight: '2.4rem'
        }],
        'quote-md': ['3.2rem', {
          lineHeight: '4.4rem'
        }],
        'name-title': ['1.5rem', {
          lineHeight: '2.0rem'
        }],
        'name-title-md': ['2.0rem', {
          lineHeight: '3.8rem'
        }],
      }
    },
  },
  plugins: [],
}
