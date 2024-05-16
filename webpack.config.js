// I created this file manually
// entry: input main file
// path join inserts the correct slash operator according to the current OS
// devServer allows us to choose a custom port number and folder to execute
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist')
    },

    mode: 'development'
}