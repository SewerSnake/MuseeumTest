module.exports = {
  entry: './index.jsx',
  module: {
    rules: [{
      loader: 'babel-loader',
      query: {
        presets: ['env']
      },
      test: /\.js$/
    }, {
      exclude: /node_modules/,
      loader: 'eslint-loader',
      test: /\.js$/
    }, {
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react']
      },
      test: /\.jsx$/
    }, {
      exclude: /node_modules/,
      loader: 'eslint-loader',
      test: /\.jsx$/
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  }
};
