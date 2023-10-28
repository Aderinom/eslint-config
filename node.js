const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project },
  env: {
    node: true,
    jest: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "unicorn"],
  extends: [
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ].map(require.resolve),
  ignorePatterns: [".eslintrc.js"],
  rules: {
    ...shared_rules,
  },
};
