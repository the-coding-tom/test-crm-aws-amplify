// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // setup preset
  // preset: '@babel/preset-env',

  // setup jest
  globalSetup: '<rootDir>/jest.setup.js',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'vue'],

  // Whether to use watchman for file crawling
  watchman: false,

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|sass)$': 'identity-obj-proxy'
  },
  // A map from regular expressions to paths to transformers
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    // '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
}
