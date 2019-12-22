const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require(path.resolve(__dirname, "package.json"));

module.exports = function() {
  return {
    entry: [
      "core-js/stable",
      "regenerator-runtime/runtime",
      path.resolve(__dirname, "web/js/index.tsx"),
      path.resolve(__dirname, "web/sass/index.scss"),
    ],
    output: {
      path: path.resolve(__dirname, "web-dist"),
      filename: `[name]-${packageJson.version}.js`,
    },
    resolve: {
      alias: {
        web: path.resolve(__dirname, "web"),
        common: path.resolve(__dirname, "common"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        version: packageJson.version,
        template: path.resolve(__dirname, "web/index-template.html"),
        inject: false,
      }),
      new MiniCssExtractPlugin({
        filename: `index-${packageJson.version}.css`,
      }),
    ],
    module: {
      rules: [
        {
          test: (path) => path.endsWith(".css"),
          include: /node_modules/,
          loaders: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: (path) => path.endsWith(".scss"),
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /(\.tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
            },
          ],
        },
      ],
    },
  };
};
