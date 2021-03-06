const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': __dirname + '/src/',
      '@style': __dirname + '/public/index.scss',
    }
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/i, use: ['vue-loader']
      }, {
        test: /\.js$/i, exclude: /node_modules/, use: ['babel-loader']
      }, {
        test: /\.(png|jpg|jpeg|mp3|mp4|avi|wav)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]'
            }
          }
        ]
      }, {
        test: /\.(c|sa|sc)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.html$/i, use: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true
  }
}