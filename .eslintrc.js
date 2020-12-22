module.exports = {
  extends: [
    "eslint:recommended",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  plugins: ["react"],
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  rules: {
    "no-unused-vars": "off",
  },
};
