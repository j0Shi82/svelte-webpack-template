const autoprefixer = require('autoprefixer');
const postcssDiscardDuplicates = require('postcss-discard-duplicates');

const plugins = [
  autoprefixer(),
  postcssDiscardDuplicates,
];

module.exports = {
  plugins,
};
