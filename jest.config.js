module.exports = {
  roots: ['<rootDir>'],
  preset: 'react-native',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-native-screens|react-navigation|@react-navigation/.*))',
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  cacheDirectory: '.jest/cache',
};
