const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                'sass-loader'
              ]
            })
          }
          ,{
            test: /\.svg|.png|.jpeg|.jpg*.*$/,
            loader: "file-loader?name=[name].[ext]"
        }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
          modules: __dirname + '/node_modules'
      }
       

        
      },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/mystyles.css')
      ],
    devServer: {
        contentBase: './dist',
        hot : true
    }
};