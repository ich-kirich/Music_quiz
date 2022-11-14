const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');    

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
    },
    output:{
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css', chunkFilename: 'index' }),
        new MiniCssExtractPlugin({ filename: 'quiz.css', chunkFilename: 'quiz' }),
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
    })],
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