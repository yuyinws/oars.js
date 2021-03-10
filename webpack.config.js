const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'oars.js',
    library: 'oars',
    libraryExport: 'default',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
};
