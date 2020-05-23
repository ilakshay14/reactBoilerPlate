const path = require('path');
const autoprefixer = require('autoprefixer');
const htmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
        chunkFilename: '[id].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader'
                    },
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         modules: {
                    //             localIdentName: "[name]__[local]___[hash:base64:5]",
                    //         },
                    //         sourceMap: true
                    //     }
                    // },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({})
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            // favicon: './src/favicon/favicon-16x16.png'
        })
    ]
};