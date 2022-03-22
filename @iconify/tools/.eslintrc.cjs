module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jasmine: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jasmine'],
	rules: {
		'no-mixed-spaces-and-tabs': ['off'],
		'no-unused-vars': ['off'],
		// '@typescript-eslint/no-unused-vars-experimental': ['error'],
	},
	overrides: [
		{
			files: ['src/**/*.ts', 'tests/*.ts'],
		},
	],
};
