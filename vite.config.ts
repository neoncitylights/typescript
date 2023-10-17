import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
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
		tsconfigPaths(),
	],
	test: {
		coverage: {
			provider: 'v8',
			reporter: [ 'text', 'json', 'html' ],
		},
	},
});
