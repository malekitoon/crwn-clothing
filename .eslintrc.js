module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'object-curly-newline': ['error', { multiline: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/no-unescaped-entities': 0,
    'no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-use-before-define': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'func-names': 0,
    'react/prop-types': 0,
  },
};
