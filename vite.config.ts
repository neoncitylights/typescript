import path from 'path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: '{{package}}',
			formats: ['es'],
			fileName: (format) => `{{package}}.${format}.js`
		}
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
	test: {
		coverage: {
			provider: 'v8',
			reporter: [ 'text', 'json', 'html' ],
		},
	},
});
