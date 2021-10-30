module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'object-curly-newline': ['error', { consistent: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 'off',
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'func-names': 0,
  },
};
