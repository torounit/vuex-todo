// rollup.config.js
import vue from 'rollup-plugin-vue2';
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs'
import babel       from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss';
import postcssScss from "postcss-scss";
import postcssSassyImport from "postcss-sassy-import"
import postcssExtend from "postcss-extend"
import postcssImport from "postcss-import"
import postcssUrl from "postcss-url"
import postcssCssnext from "postcss-cssnext"


export default {
	entry: 'src/scripts/main.js',
	dest: 'public/scripts/bundle.js',
	external: ['./bundle'],
	plugins: [
		vue(),
		postcss({
			parser: postcssScss,
			plugins: [
				postcssSassyImport(),
				postcssExtend(),
				postcssImport(),
				postcssUrl(),
				postcssCssnext(),
			],
			extensions: ['.css', '.scss'],
		}),
		nodeResolve({
			jsnext: true, // if provided in ES6
			main: true, // if provided in CommonJS
			browser: true // if provided for browsers
		}),
		commonjs(),
		babel()
	],
}
