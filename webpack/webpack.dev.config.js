/*
 * @Author: rockyWu
 * @Date: 2020-07-10 19:48:46
 * @Description:
 * @LastEditors: rockyWu
 * @LastEditTime: 2020-07-10 20:54:05
 */
const path = require("path");

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
  mode: "development",
  entry: resolvePath("../src/client/app/index.js"), // 入口文件
  output: {
    filename: "index.js",
    path: resolvePath("../dist/static"),
  },
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
