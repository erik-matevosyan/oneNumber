const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    // Where files will be sent after being bundled
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    //webpack dev server
    devServer: {
        port: 8080,
        watchContentBase: false, // Tell dev-server to watch the files served by the devServer.contentBase option. It is disabled by default. When enabled, file changes will trigger a full page reload.
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './client/index.html' })
    ]
}