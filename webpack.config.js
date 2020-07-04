const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  const settingsPath = path.resolve(__dirname, `web/js/settings/${env.env}`);
  const settings = require(settingsPath);

  return {
    devtool: env.mode === "development" ? "inline-source-map" : false,
    entry: [
      "core-js/stable",
      "regenerator-runtime/runtime",
      "whatwg-fetch",
      path.resolve(__dirname, "web/js/index.tsx"),
      path.resolve(__dirname, "web/sass/index.scss"),
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[contenthash].js",
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
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "web/index-template.html"),
        templateParameters: {
          gaTrackingId: settings.ga && settings.ga.trackingId,
        },
      }),
      new MiniCssExtractPlugin({
        filename: "[contenthash].css",
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
                  localIdentName: "[name]__[local]___[hash:base64:5]",
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
