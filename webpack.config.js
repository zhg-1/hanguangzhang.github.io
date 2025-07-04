const path = require("path");
module.exports = {
  mode: "development", //模式配置
  devtool: "inline-source-map", //查看打包后的源代码
  entry: "./src/main.js", //入口文件
  output: {
    //配置打包后输出的文件名及目录
    path: path.resolve(__dirname, "dist"), //打包后存放目录,__dirname为一级目录，dist为二级目录
    // filename: "[name].[contenthash]", //打包后文件名,name可以写固定字符，默认为“main”
    filename: "main.js", //打包后文件名,name可以写固定字符，默认为“main”
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ],
  },
};
