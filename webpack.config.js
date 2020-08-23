const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const WebpackModuleNomodulePlugin = require('webpack-module-nomodule-plugin');

const sveltePath = path.resolve('node_modules', 'svelte');
const babelConfig = require('./babel.config');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const makeConfig = (target) => ({
  entry: {
    bundle: ['./src/main.js'],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
  },
  resolve: {
    alias: {
      svelte: sveltePath,
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: ['src', 'node_modules'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name].[contenthash].${target}.js`,
    chunkFilename: `[name].[chunkhash].[contenthash].${target}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(?:svelte|m?js)$/,
        include: [path.resolve(__dirname, 'src'), sveltePath],
        use: {
          loader: 'babel-loader',
          options: {
            ...babelConfig.env[target],
          },
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp4|svg|ttf|webp)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              sassOptions: {
                includePaths: [
                  './src/assets/style',
                  './node_modules',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new Visualizer({
      filename: './statistics.html',
    }),
    new HtmlWebpackPlugin({
      title: 'My Page Title',
      template: './src/index.template.html',
    }),
    prod ? new WebpackModuleNomodulePlugin(target, 'minimal') : () => {},
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  devtool: prod ? false : 'source-map',
  target: 'web',
});

module.exports = prod ? [makeConfig('modern'), makeConfig('legacy')] : makeConfig('legacy');
