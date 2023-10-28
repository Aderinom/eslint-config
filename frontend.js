require("@rushstack/eslint-patch/modern-module-resolution");

const { shared_rules } = require("./shared-rules");

module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: { 
    browser: true, 
    es2020: true 
  },
  plugins: ["@typescript-eslint/eslint-plugin", "react-refresh", "unicorn"],
  extends: [
    "unicorn/recommended",
    "@typescript-eslint/recommended",
    "prettier/recommended",
    "react-hooks/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    ...shared_rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
