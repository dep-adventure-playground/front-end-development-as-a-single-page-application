const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { default: merge } = require("webpack-merge")

const superConfig=require('./webpack.config');
module.exports = merge(superConfig,{
    output:{
        filename: 'main.bundle.js',
        path: __dirname +  '/dist',
    },
    
    devServer: {
        port:3000
    },
    mode: 'development',
    devtool:false,
    plugins: [       
        new MiniCssExtractPlugin({
            filename:'main.css',
        })
    ]
})