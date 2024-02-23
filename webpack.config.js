const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    }]
},plugins : [
    new MiniCssExtractPlugin({
        filename: "styleBundle.css"
    }),
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html')
    })
]
};