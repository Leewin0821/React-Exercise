module.exports = {
  entry: "./js/timer.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'jsx?harmony'
    }]
  }
};
