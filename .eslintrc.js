module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",

    // These plugins **disable** eslint rules that conflict with prettier, we need to run prettier as well as eslint.
    // Since these plugins disable other rules, they should be placed last
    "prettier",
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  ignorePatterns: ["dist/**"],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
  },
};
