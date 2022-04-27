module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:yaml/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'ejs', 'react'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: false,
        project: './',
      },
    },
  },
  overrides: [
    {
      files: ['./**/*.mdx'],
      extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:mdx/recommended',
        'plugin:prettier/recommended',
        'plugin:yaml/recommended',
      ],
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
  },
};
