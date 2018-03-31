const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + "/src/js/",
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: [
      __dirname + '/src',
    ],
    host: '0.0.0.0',
    port: 9000,
    compress: true
  },
  devtool: 'source-maps',
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/html/index.html',
      inject: "body"
    })
  ]
}