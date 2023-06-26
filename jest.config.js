module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.test.js'],
  coverageReporters: ['text'],
  collectCoverage: false,
};
