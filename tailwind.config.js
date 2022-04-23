const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)'
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)'
    }),
    fontSize: {
      cxs: ['10px', '12px'],
      csm: ['12px', '14px'],
      clg: ['16px', '18px'],
      cxl: ['22px', '24px'],
      pxs: ['7px', '9px'],
      psm: ['9px', '11px'],
      plg: ['11px', '13px'],
      pxl: ['13px', '15px'],
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    colors: {
      transparent: 'transparent',
      gray: colors.blueGray,
      blue: colors.indigo,
      green: colors.lime,
      white: colors.white,
      brand: {
        50: '#EEF2FF',
        100: '#E0E7FF',
        200: '#BFDDE6',
        300: '#A5B4FC',
        400: '#818CF8',
        500: '#6366F1',
        600: '#4F46E5',
        700: '#4338CA',
        800: '#3730A3',
        900: '#312E81'
      }
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
