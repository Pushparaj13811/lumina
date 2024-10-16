// jest.config.js
export default {
  testEnvironment: 'node', // Use Node.js environment for testing
  transform: {
    '^.+\\.js$': 'babel-jest', // Use Babel to transpile JavaScript files
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore these paths during testing
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Directory for coverage reports
  coverageThreshold: {
    global: {
      branches: 80, // Minimum coverage percentage for branches
      functions: 80, // Minimum coverage percentage for functions
      lines: 80, // Minimum coverage percentage for lines
      statements: 80, // Minimum coverage percentage for statements
    },
  },
};

