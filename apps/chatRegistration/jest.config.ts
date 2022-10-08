/* eslint-disable */

export default {
  displayName: 'chatRegistration',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '~tools/(.*)': '<rootDir>/src/tools/$1',
    '~components/(.*)': '<rootDir>/src/components/$1',
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
  coverageDirectory: '../../coverage/apps/chatRegistration',
};
