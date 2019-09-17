const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require(path.resolve(__dirname, 'package.json'));

module.exports = function() {
  return {
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      path.resolve(__dirname, 'web/js/index.jsx'),
      path.resolve(__dirname, 'web/sass/index.scss'),
    ],
    output: {
      path: path.resolve(__dirname, 'web-dist'),
      filename: `[name]-${packageJson.version}.js`
    },
    plugins: [
      new HtmlWebpackPlugin({
        version: packageJson.version,
        template: path.resolve(__dirname, 'web/index-template.html'),
        inject: false
      }),
      new MiniCssExtractPlugin({
        filename: `index-${packageJson.version}.css`
      })
    ],
    resolve: {
      alias: {
        common: path.resolve(__dirname, 'common'),
        web: path.resolve(__dirname, 'web'),
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: path => path.endsWith('.css'),
          include: /node_modules/,
          loaders:  [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: path => path.endsWith('.scss'),
          exclude: /node_modules/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          }, {
            loader: 'sass-loader'
          }]
        },
        {
          test: /(\.jsx?)$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            { loader: 'eslint-loader' }
          ]
        }
      ]
    }
  };
};
