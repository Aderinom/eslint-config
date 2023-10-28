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
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "function",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
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
