module.exports = {
  plugins: ['svelte3'],
  extends: ['airbnb-base'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-mutable-exports': 'off',
        'no-multiple-empty-lines': [
          'error',
          {
            max: 1,
            maxBOF: 2,
          },
        ],
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  settings: {
    'svelte3/ignore-styles': () => true,
    'import/core-modules': ['svelte'],
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
