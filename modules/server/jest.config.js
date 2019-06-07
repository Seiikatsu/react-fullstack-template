module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node',
    'ts',
    'tsx',
  ],
  testMatch: [
    '**/test/**/*.test.(ts|js)',
  ],
  testEnvironment: 'node',
  preset: 'ts-jest',
};
