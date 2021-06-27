module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: [
    `@typescript-eslint`,
    `jsx-a11y`,
    `import`,
    `flowtype`,
    `react`,
    `prettier`,
  ],
  extends: [
    `eslint:recommended`,
    `plugin:react-hooks/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:import/recommended`,
    `plugin:import/typescript`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:flowtype/recommended`,
    `react-app`,
    `prettier`,
  ],
  rules: {
    "prettier/prettier": `warn`,
  },
}
