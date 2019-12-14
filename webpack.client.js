const { resolve } = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");

const config = {
  entry: "./src/client/index.js",
  output: {
    path: resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = merge(baseConfig, config);
