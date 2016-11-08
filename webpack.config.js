var webpack = require("webpack");

var replaceObject = {
  search: 'hellow',
  replace: 'Hellow From Webpack'
};

module.exports = {
  // entry: './main.js',
  entry: {
    app: './main.js',
    vendor: './vendor.js'
  },
  module:{
    loaders: [
      {test: /\.html/,
       //loader:'raw-loader',
       loaders: [
          'raw-loader',
          'string-replace-loader?' + JSON.stringify(replaceObject)
       ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    /*new webpack.DefinePlugin({
      PROD: false,
      DEV: true
    })*/
  ],
  output: {
    path: "./dist",
    filename: '[name].bundle.js'
  }
}