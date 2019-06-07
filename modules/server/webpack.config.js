const path = require('path');

const ENTRY_FILE = './src/index.ts';

module.exports = (env, argv) => {
	const CURRENT_PATH = __dirname;
	const DIST_PATH = path.join(CURRENT_PATH, 'build');

	return {
		target: 'node',
		mode: argv.mode,
		entry: ENTRY_FILE, // webpack entry point. Module to start building dependency graph,
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					// transpile TS to ES5
					test: /\.ts?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		output: {
			path: DIST_PATH, // Folder to store generated bundle
			filename: 'app.js', // Name of generated bundle after build
		},
		node: {
			// Need this when working with express, otherwise the build fails
			__dirname: false, // if you don't put this is, __dirname and __filename return blank or /
			__filename: false,
		},
		resolve: {
			extensions: ['.ts', '.js'],
		},
		optimization: {
			// TODO with minify enabled, typeorm (or the sql driver) make problems on production build
			minimize: false,
		},
	};
};
