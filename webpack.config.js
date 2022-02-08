const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const randomString = require("random-string");

const assetsDistPath = randomString({ length: 10 });
module.exports = {
  entry: "./src/index.js",
  output: {
    chunkFilename: "assets/js/[name].[hash].js",
    filename: "assets/js/[name].[hash].js",
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.m?js$/,
        include: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
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
        test: /\.(jpg|jpeg|png|svg)$/,
        include: path.resolve(__dirname, "src"),
        loader: "url-loader",
        options: {
          limit: 10240,
          name: `assets/${assetsDistPath}/img/[contenthash].[ext]`,
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      jquery: "jquery/src/jquery",
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      filename: `assets/${assetsDistPath}/css/[id].[hash].css`,
      chunkFilename: `assets/${assetsDistPath}/css/[id].[hash].css`,
      ignoreOrder: false,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
