module.exports = {
  purge: {
    enabled: false,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': 'Poppins, sans-serif'
    },
    extend: {
      colors: {
        navy: '#0F1837',
        yello: '#F5D35C',
        ogreen: {
          1: '#83D987',
          2: '#0A9F82',
        },
        grayish: {
          1: '#9094A2',
          2: '#898889',
          3: '#8A8C97',
        },
        dark: {
          1: '#132039',
          2: '#020B2A',
          3: '#0F1837',
        },
        light: {
          1: '#F7F7F9',
          2: '#F5F6F8',
        },
        purpish: {
          1: '#E7E5F9',
          2: '#5943A6',
        }
      },
      spacing: {
        15: '60px',
        '10px': '10px',
        '30px': '30px',
      },
      borderRadius: {
        10: '10px',
        25: '25px',
        'badge': '0 0 20px 0',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
