const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, /* supports .scss AND .css files, else the latter won't get included in bundle.js by webpack */
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  //devtool: 'source-map', // wanted to use cheap-module-eval-source-map or even eval-source-map but they don't seem to work on Firefox at the moment
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};