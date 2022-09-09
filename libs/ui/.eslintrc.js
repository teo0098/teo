module.exports = {
  root: true,
  extends: '@teo0098/eslint-config',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslint*'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
