
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main.js',
    output:{
        filename: 'main.bundle.js',
        path: __dirname +  '/dist',
        publicPath: '',
        assetModuleFilename: 'asset/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /[.]html$/,
                use: ['html-loader']
            },
            {
                test: /[.]scss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'main.[contenthash].min.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    
}
