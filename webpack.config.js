// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin'); // Import ESLintPlugin

console.log('Webpack config loaded'); // Log to confirm the config is read

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // Automatically clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // New rule for image files
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Preserve the original path and file name
                            outputPath: 'images/', // Specify the output path for images in the dist folder
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ESLintPlugin({
            files: 'src/**/*.{js,jsx}', // Lint JavaScript and JSX files
            failOnWarning: false, // Set to true to fail the build on warnings
            failOnError: true, // Set to true to fail the build on errors
            emitWarning: true, // Emit warnings in the build output
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // Serve static files from the public directory
        },
        compress: true, // Enable gzip compression for everything served
        port: 3000, // Specify the port number
        hot: true, // Enable hot module replacement
        historyApiFallback: true, // This is crucial for handling client-side routing
    },
    mode: 'development',
};
