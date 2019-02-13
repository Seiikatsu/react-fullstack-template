const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    // check if build is in production mode
    const isProduction = argv.mode === 'production';

    const CURRENT_PATH = __dirname;
    /*
    * We are using different destination paths for development and production, because of the modularity in this project.
    * For the development build, we just start a development server with webpack (see package.json), but we "don't care"
    * about the production build, so we move it into the project root build folder under "static" to make clear that this
    * is a frontend bundle. The server just need to use the static folder and service the files.
    * Look at the prod.js in the server module to see how the files are served.
    */
    const DIST_PATH = isProduction ? path.join(CURRENT_PATH, '..', 'dist', 'static') : path.join(CURRENT_PATH, 'dist');

    return {
        target: 'web', // default anyway, but we make it clear
        mode: argv.mode, // development or production
        entry: './src/App.jsx', // from here webpack starts to build the bundle
        module: {
            rules: [
                {
                    // all files that have the extension .js or .jsx are transpile with the babel-loader to old es5.
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/, // we ignore all dependencies
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    // all html files are loaded with html folder, see the HtmlWebpackPlugin part for more details
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
            // copy the index.html and facicon.ico to the destination path, as well inject the js file.
            new HtmlWebPackPlugin({
                template: 'resources/index.html', // path the source html
                filename: 'index.html', // default, but to make it clear
                favicon: 'resources/favicon.ico'
            }),
        ],
        // webpack-dev-server
        devServer: {
            compress: isProduction,
            port: 3000
        },
        resolve: {
            extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"]
        }
    }
};
