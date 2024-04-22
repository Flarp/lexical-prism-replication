import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [nodeResolve(), replace({
		"process.env.NODE_ENV": "'development'"
	})]
};