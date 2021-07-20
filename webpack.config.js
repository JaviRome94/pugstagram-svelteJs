const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte']
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                  loader: 'svelte-loader'
                }
            },

            {
              test: /\.(png|gif|jpg|jpeg)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: { 
                      name: 'assets/[hash].[ext]' 
                    },
                }
              ],
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject:true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}
