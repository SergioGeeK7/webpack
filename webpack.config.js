module.exports = {
  // entry: './main.js',
  entry: {
    app: './main.js',
    vendor: './vendor.js'
  },
  output: {
    path: "./dist",
    filename: '[name].bundle.js'
  }
}