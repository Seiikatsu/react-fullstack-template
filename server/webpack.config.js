const path = require('path');

const ENTRY_FILE = './src/app.js';

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    const CURRENT_PATH = __dirname;
    const DIST_PATH = isProduction ? path.join(CURRENT_PATH, '..', 'dist') : path.join(CURRENT_PATH, 'dist');

    return {
        target: 'node',
        mode: argv.mode,
        entry: ENTRY_FILE, // webpack entry point. Module to start building dependency graph,
        module: {
            rules: [
                {
                    // Transpiles ES6-8 into ES5
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        output: {
            path: DIST_PATH, // Folder to store generated bundle
            filename: 'app.js'  // Name of generated bundle after build
        },
        node: { // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname and __filename return blank or /
            __filename: false,
        },
        externals: [
            /*
            * We use the "datasource" module to separate the datasource (sequelize by default) from our server
            * application, due to how sequelize work (dynamic requires of dialects), we need to configure manually
            * which dialect we want to use. By default the server is configured to use mysql. You can exchange the
            * mysql2 dependency with one of the four below if you use another dialect.
            */
            'pg',
            'sqlite3',
            'tedious',
            'pg-hstore'
        ],
    };
};
