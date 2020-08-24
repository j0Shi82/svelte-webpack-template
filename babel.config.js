const isTest = process.env.NODE_ENV === 'test';

const configTest = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

const plugins = [
];

const config = {
  env: {
    legacy: {
      sourceType: 'unambiguous',
      presets: [
        [
          '@babel/preset-env', {
            corejs: { version: 3, proposals: true },
            useBuiltIns: 'usage',
          },
        ],
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        ...plugins,
      ],
    },
    modern: {
      presets: ['@babel/preset-modules'],
      plugins,
    },
  },
};

module.exports = isTest ? configTest : config;
