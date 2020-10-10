const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  entry: path.join(__dirname, '../example/src/app.js'),
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js', // 使用 webpack-dev-server 启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: 'css-loader?modules',
        options: {
          modules: true,
        },
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        loader: 'css-loader',
        options: {
          modules: false,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 8001, // 启动端口为 8001 的服务
    open: true, // 自动打开浏览器
  },
}

module.exports = merge(devConfig, baseConfig) // 将baseConfig和devConfig合并为一个配置
