module.exports = {
  root: true,
  extends: '@teo0098/eslint-config',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: ['.eslint*', '*config*'],
};
