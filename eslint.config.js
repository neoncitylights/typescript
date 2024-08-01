import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import pluginPromise from 'eslint-plugin-promise'

export default tsEslint.config(
	{
		ignores: [
			'**/dist/',
			'docs/typedoc',
		],
	},
	stylistic.configs.customize({
		indent: 'tab',
		quote: 'single',
		semi: false,
		jsx: false,
	}),
	eslint.configs.recommended,
	pluginPromise.configs['flat/recommended'],
	...tsEslint.configs.recommended,
	...tsEslint.configs.stylistic,
	{
		files: [
			'packages/**/src',
			'packages/**/tests',
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
)
