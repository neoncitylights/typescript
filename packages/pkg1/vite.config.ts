import dts from 'vite-plugin-dts'
import { defineProject } from 'vitest/config'

export default defineProject({
	build: {
		lib: {
			entry: new URL('src/index.ts', import.meta.url).pathname,
			formats: ['es'],
			fileName: () => 'index.mjs',
		},
	},
	define: {
		'import.meta.vitest': 'undefined',
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
	test: {
		includeSource: ['src/**/*.{js,ts}'],
		coverage: {
			include: ['src/**/*.{js,ts}'],
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
		},
	},
})
