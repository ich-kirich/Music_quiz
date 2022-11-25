const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development'
if(process.env.NODE_ENV === 'production'){
    mode = 'production'
}
console.log('mode ' + mode)
module.exports = {
    mode: mode, 
    entry: {
        index: ['./src/index.js', './src/styles/style.scss'],
        quiz: ['./src/quiz.js', './src/styles/quiz.scss'],
        results: ['./src/results.js', './src/styles/results.scss'],
    },
    output:{
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
        filename: "./src/assets/styles/[name].css",
        filename: '[name].js',
        path: __dirname + '/dist',
        chunkFilename: '[id].[chunkhash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name][ext].css', chunkFilename: 'index' }),
        new MiniCssExtractPlugin({ filename: '[name][ext].css', chunkFilename: 'quiz' }),
        new MiniCssExtractPlugin({ filename: '[name][ext].css', chunkFilename: 'results' }),
        new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        favicon: "./src/images/favicon.ico",
        chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: "quiz.html",
            template: "./src/quiz.html",
            favicon: "./src/images/favicon.ico",
            chunks: ['quiz']
        }),
        new HtmlWebpackPlugin({
            filename: "results.html",
            template: "./src/results.html",
            favicon: "./src/images/favicon.ico",
            chunks: ['results']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {

                                        }
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
}