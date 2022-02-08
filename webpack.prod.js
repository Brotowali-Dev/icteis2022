const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  plugins: [
    new CompressionPlugin(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    nodeEnv: "production",
    concatenateModules: true,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],
  },
});
