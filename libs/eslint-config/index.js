module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'testing-library',
    'jest-dom',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  ignorePatterns: ['node_modules'],
};
