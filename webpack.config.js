const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (env) => {
  return {
    devtool: env.mode === "development" ? "inline-source-map" : false,
    entry: [
      path.resolve(__dirname, "web/js/index.tsx"),
      path.resolve(__dirname, "web/sass/index.scss"),
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[contenthash].js",
      chunkFilename: "[contenthash].bundle.js",
    },
    resolve: {
      alias: {
        web: path.resolve(__dirname, "web"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, "web/robots.txt") },
          {
            from: path.resolve(__dirname, "web/manifest.json"),
          },
          {
            from: path.resolve(__dirname, "web/.well-known"),
            to: ".well-known",
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "web/index-template.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "[contenthash].css",
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
      new ESLintPlugin(),
    ],
    module: {
      rules: [
        {
          test: (path) => path.endsWith(".css"),
          include: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
            },
          ],
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
                  localIdentName: "[path]_[name]_[local]",
                },
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
