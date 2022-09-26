module.exports = {
  root: true,
  extends: '../eslint-config',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslint*', 'dist'],
};
