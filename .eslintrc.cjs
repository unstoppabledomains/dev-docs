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
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:prettier/recommended'],
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
      files: ['./**/*.ts', './**/*.js', './**/*.tsx', './**/*.jsx'],
      extends: ['airbnb'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': 'off',
        'import/extensions': 'off',
      },
    },
    {
      files: ['./**/*.tsx', './**/*.jsx'],
      plugins: ['react'],
      extends: ['plugin:react/recommended'],
    },
    {
      files: ['./**/*.ejs'],
      plugins: ['ejs'],
    },
    {
      files: ['./**/*.md'],
      extends: ['plugin:markdown/recommended'],
    },
    {
      files: ['./**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': 'off',
      },
    },
    {
      files: ['./**/*.yaml', './**/*.yml'],
      extends: ['plugin:yaml/recommended'],
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
  },
};
