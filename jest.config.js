export default {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
  moduleNameMapper: { '^uuid$': 'uuid' },
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  transform: {},
};
