module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'prettier',
		'@typescript-eslint'
	],
	extends: [
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		indent: [
			// everything except tabs used for indent = error
			'error',
			'tab',
			{
				SwitchCase: 1 // forbid same indent of 'switch' and 'case'
			}
		],
		// prettier specific rules
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, // use '' instead of ''
				useTabs: true, // allow tabs from prettier rules
				trailingComma: 'es5', // Trailing commas where valid in ES5 (objects, arrays, etc.)
				arrowParens: 'always',
			},
		],
		'no-tabs': 0, // allow tabs
		'no-unused-vars': 0 // imports that are used only to declare a type are marked as 'unused'
	},
	settings: {
		'import/resolver': {
			node: {
				path: [
					'src'
				],
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx'
				]
			}
		}
	}
};
