const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: colors.black,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
