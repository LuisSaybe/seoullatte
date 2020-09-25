module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": false,
  },
};
