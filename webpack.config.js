var path = require('path');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'dist/bundle.js',
    path: path.join(__dirname, '/'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' }
    ]
  }
}
