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

const config = {
  presets: [
    '@babel/preset-modules',
  ],
};

module.exports = isTest ? configTest : config;
