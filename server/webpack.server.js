const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle for Node
  target: 'node', 
  
  // Tell webpack root file of our server
  entry: './src/index.js', 

  // Tell webpack where to put output file it generates
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'build')
  }, 

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);