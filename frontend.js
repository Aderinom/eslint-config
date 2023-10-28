const { resolve } = require("node:path");
const { shared_rules } = require("./shared-rules");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project },
  env: { browser: true, es2020: true },
  plugins: ["@typescript-eslint/eslint-plugin", "react-refresh"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  root: true,
  ignorePatterns: [".eslintrc.js"],
  rules: {
    ...shared_rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
