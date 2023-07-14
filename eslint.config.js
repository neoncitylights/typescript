import tsEslint from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import globals from 'globals';

export default [
	js.configs.recommended,
	tsEslint.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parser: tsEslintParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
			},
			globals: {
				...globals.node,
				...globals.browser,
			}
		},
		plugins: {
			'@typescript-eslint': tsEslint,
		},
		ignores: [
			'dist/**/*.ts',
		],
		files: [
			'src/**/*.{ts,tsx}',
		],
		rules: {
			'@typescript-eslint/adjacent-overload-signatures': ['error'],
			'@typescript-eslint/comma-dangle': ['error', {
				'arrays': 'always-multiline',
				'exports': 'always-multiline',
				'functions': 'always-multiline',
				'imports': 'always-multiline',
				'objects': 'always-multiline',
			}],
			'@typescript-eslint/default-param-last': ['error'],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-inferrable-types': ['error', {
				'ignoreParameters': true,
				'ignoreProperties': true,
			}],
			'@typescript-eslint/no-unused-vars': ['error'],
			'@typescript-eslint/semi': ['error'],
			'comma-dangle': 'off',
			'default-param-last': 'off',
			'no-unused-vars': 'off',
			'indent': ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'quotes': ['error', 'single'],
			'semi': 'off',
		},
	}
];
