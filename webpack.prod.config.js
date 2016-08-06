var path = require('path');
var webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || "development";
console.log('process ENV : ',process.env.NODE_ENV);

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname,'/build/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        },
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: true
        }
    })
  ]
};