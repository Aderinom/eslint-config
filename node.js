const { shared_rules } = require("./shared-rules");

module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "unicorn"],
  extends: [
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    ...shared_rules,
  },
};
