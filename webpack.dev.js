const { merge } = require("webpack-merge");
require("dotenv").config();

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  devtool: "eval",
  devServer: {
    historyApiFallback: true,
    port: 90,
    allowedHosts: ["test.icteis.com"],
    open: true,
    // proxy: {
    //   "/core": process.env.CORE_WEB_URL,
    // },
  },
});
