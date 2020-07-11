/*
 * @Author: rockyWu
 * @Date: 2020-07-10 21:21:56
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 21:29:05
 */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const resolvePath = (pathStr) => path.resolve(__dirname, pathStr);

process.env.BABEL_ENV = "node"; // 设置 babel 的运行环境变量
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  target: "node",
  entry: resolvePath("../src/server/app/index.js"),
  output: {
    filename: "app.js",
    path: resolvePath("../dist/server"),
  },
  externals: [nodeExternals()], // 排除不需要打包的模块，因为 node 端会自动载入这些包
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
