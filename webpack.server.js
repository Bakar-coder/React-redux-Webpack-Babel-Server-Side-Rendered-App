const { resolve } = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/server.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loader: "ignore-loader",

      }
    ]
  }
};

module.exports = merge(baseConfig, config);
