module.exports = {
  './**/*.{ts,tsx,js,jsx,ejs,json,md,mdx}': [
    'eslint --fix',
    'prettier --ignore-unknown --write',
  ],
  './**/*.{ts,tsx}': ['yarn tsc:check'],
};
