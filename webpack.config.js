const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "eval-source-map",             //webpack plugin for mapping bugs
    resolve: {
        extensions: ['.js','.ts','.rsx'],
    },
    module: {
        rules: [{
            test:/\.tsx?$/,
            loader: 'babel-loader',         //type of loader
            exclude: /node_modules/,

        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { modules: true }}],
        },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
};