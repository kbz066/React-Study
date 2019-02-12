const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: "development",
  entry: {
    index: ["./src/js/index.js"],

  },
  output: {
    filename: 'js/[name].js',

    path: path.resolve(__dirname, 'dist'),


  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist/html"),
    port: 9999
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/html/index.html"),
      filename: 'html/index.html',
    }),
    // new MiniCssExtractPlugin({//实例MiniCssExtractPlugin
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: 'css/[name].css',
    //   chunkFilename: '[id].css',
    // })
  ],
  resolve: {

    // 省略后缀
    extensions: ['.js', '.jsx', '.css']
  },
}