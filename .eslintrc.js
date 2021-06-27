module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: [`@typescript-eslint`, `react`, `prettier`],
  extends: [
    `eslint:recommended`,
    `plugin:react-hooks/recommended`,
    `react-app`,
    `prettier`,
  ],
  rules: {
    "prettier/prettier": `warn`,
  },
}
