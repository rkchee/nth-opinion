// # compile to a <script> containing a self-executing function ('iife')
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import url from 'rollup-plugin-url';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';


export default {
  external: [],
  globals: {},
  entry: 'yjs-element.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',

  plugins: [
    // babel({
    // //   exclude: 'node_modules/**',
    // }),
  	resolve({
  		jsnext: true,
  		main: true,
  		browser: true,  		
  	}),
  	commonjs({
		  include: 'node_modules/**',
  	}),	
  ],
};