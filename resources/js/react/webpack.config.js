const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, "build"),
        },
        port: 3000,
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            },
            {
                test: /\.(css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: '[name]-[sha1:hash:7].[ext]'
                        },
                    }
                ],
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: '[name]-[sha1:hash:7].[ext]'
                        },
                    }
                ],
            }
          ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
};