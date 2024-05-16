// I created this file manually
// entry: input main file
// path join inserts the correct slash operator according to the current OS
// devServer allows us to choose a custom port number and folder to execute
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './index.tsx',

    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [
            '.tsx', '.ts', '.js'
        ]
    }, 

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],

    mode: 'development'
}