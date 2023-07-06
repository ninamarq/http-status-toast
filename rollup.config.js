import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [
	{
		input: './src/index.tsx',
		output: [
			{
				file: 'dist/index.ts',
				format: ''
			},
			{
				file: 'dist/index.es.ts',
				format: 'es',
				exports: 'named'
			}
		],
		plugins: [
			postcss({
				plugins: [],
				minimize: true
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react']
			}),
			external(),
			resolve(),
		]
	}
];
