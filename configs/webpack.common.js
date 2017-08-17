var helpers = require('./helpers');

module.exports = {
  entry: {
    app: './src/main.ts',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
  },
 };