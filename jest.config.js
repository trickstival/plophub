module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    // 'src/index.ts',
    '\\.d\\.ts$',
  ],
  testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
  globals: {
    __DEV__: true,
    __TEST__: true,
    __BROWSER__: true,
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
}
