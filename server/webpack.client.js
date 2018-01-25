const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Tell webpack root file of our server
  entry: './src/client/client.js', 

  // Tell webpack where to put output file it generates
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);