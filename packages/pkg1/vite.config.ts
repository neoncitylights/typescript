import path from 'node:path';

import dts from 'vite-plugin-dts';
import { defineProject } from 'vitest/config';

export default defineProject({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: () => '{{package}}.mjs',
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
			reporter: [ 'text', 'json', 'html' ],
		},
	},
});
