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
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    borderRadius: {
      'md': '0.3em',
      'full': '100%',
    },
    extend: {
      fontFamily: {
        sans: ['roboto', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              "marginBottom": "0em",
            },
            h2: {
              "marginBottom": "0em",
            },
            h3: {
              "marginBottom": "0em",
            },
            h4: {
              "marginBottom": "0em",
            },
            hr: {
              "marginTop": "2em",
              "marginBottom": "2em",
              "borderTopWidth": "2px"
            },
            img: {
              "borderRadius": ".3em"
            },
            a: {
              color: theme('colors.blue.600'),
            }
          },
        },
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.blue.400'),
              },
              strong: {
                color: theme('colors.gray.300'),
              },
              'ol > li::before': {
                color: theme('colors.gray.300'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.400'),
              },
              hr: {
                borderColor: theme('colors.gray.700'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.400'),
              },
              h1: {
                color: theme('colors.gray.300'),
              },
              h2: {
                color: theme('colors.gray.300'),
              },
              h3: {
                color: theme('colors.gray.300'),
              },
              h4: {
                color: theme('colors.gray.300'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.gray.300'),
              },
              'a code': {
                color: theme('colors.gray.300'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography'),]
}
