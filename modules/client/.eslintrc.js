module.exports = {
	extends: [
		"plugin:react/recommended",
	],
	plugins: [
		"react",
	],
	env: {
		"browser": true,
		"jasmine": true,
		"jest": true
	},
	settings: {
		react: {
			"pragma": "React",
			"version": "detect"
		}
	}
};
