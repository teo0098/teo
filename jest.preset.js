const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
