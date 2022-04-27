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
  overrides: [
    {
      files: ['./**/*.ts', './**/*.js', './**/*.tsx', './**/*.jsx'],
      extends: ['airbnb'],
      rules: {
        'react/jsx-filename-extension': 'off',
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
      rules: { 'react/jsx-filename-extension': 'off' },
    },
    {
      files: ['./**/*.yaml', './**/*.yml'],
      extends: ['plugin:yaml/recommended'],
    },
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
