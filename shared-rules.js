module.exports.shared_rules = {
  "unicorn/prevent-abbreviations": "off",
  "unicorn/prefer-module": "off",
  "prettier/prettier": "warn",
  "@typescript-eslint/no-unused-vars": "off",
  "@typescript-eslint/ban-types": "off",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/unbound-method": "error",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      format: ["camelCase"],
    },
    {
      selector: "function",
      format: ["camelCase", "PascalCase"],
    }, // JSX components
    {
      selector: "variable",
      format: ["PascalCase", "camelCase", "UPPER_CASE"],
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
};
