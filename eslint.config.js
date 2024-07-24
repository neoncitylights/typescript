import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

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
		jsx: true,
	}),
	eslint.configs.recommended,
	...tsEslint.configs.recommended,
	...tsEslint.configs.stylistic,
	{
		languageOptions: {
			parserOptions: {
				project: [
					'./tsconfig.eslint.json',
					'./packages/**/tsconfig.eslint.json',
				],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
)
