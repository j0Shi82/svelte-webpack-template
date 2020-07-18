module.exports = {
  testMatch: ['**/__tests__/*.spec.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  moduleFileExtensions: ['js', 'svelte', 'json'],
  moduleDirectories: ['src', 'node_modules'],
  transformIgnorePatterns: [
    'node_modules/(?!(svelte-spa-router)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/__mocks__/fileMock.js',
  },
};
