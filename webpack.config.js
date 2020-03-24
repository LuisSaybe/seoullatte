const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const settingsPath = path.resolve(__dirname, `web/js/settings/${env.env}`);
  const settings = require(settingsPath);

  return {
    entry: [
      "core-js/stable",
      "regenerator-runtime/runtime",
      path.resolve(__dirname, "web/js/index.tsx"),
      path.resolve(__dirname, "web/sass/index.scss"),
    ],
    devtool: argv.mode === "production" ? false : "inline-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[contenthash].js",
    },
    resolve: {
      alias: {
        web: path.resolve(__dirname, "web"),
        settings: settingsPath,
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    plugins: [
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
