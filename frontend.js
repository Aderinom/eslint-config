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
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    ...shared_rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "import",
        format:null
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
  
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
  },
};
