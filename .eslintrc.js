module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": true,
      "variables": true,
      "allowNamedExports": false
  }]
  },
};
