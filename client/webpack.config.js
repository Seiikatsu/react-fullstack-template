const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    const CURRENT_PATH = __dirname;
    const DIST_PATH = isProduction ? path.join(CURRENT_PATH, '..', 'dist', 'static') : path.join(CURRENT_PATH, 'dist');

    return {
        target: 'web', // default anyway, but we make it clear
        mode: argv.mode,
        entry: './src/App.jsx',
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
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader'
                    }
                }
            ]
        },
        output: {
            path: DIST_PATH,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: 'resources/index.html', // path the source html
                filename: 'index.html', // default, but to make it clear
                favicon: 'resources/favicon.ico'
            })
        ],
        node: { // dont exactly know why this is necessary, but seems related to a bug in css-loader
            fs: 'empty'
        },
        devServer: {
            compress: isProduction,
            port: 3000
        }
    }
};
