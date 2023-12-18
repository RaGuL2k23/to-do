const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode:'production',
  devtool: 'source-map',

  devServer: {
    static: './dist',
  }, 
  cache: false,
   
  module: {
     rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
  
};