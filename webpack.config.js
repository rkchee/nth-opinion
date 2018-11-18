const path = require('path')
const webpack = require('webpack')

module.export = {
	entry: 'yjs-element.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.min.js'
	},
	module : {
		rule: [
		]
	},
	plugin: [
	]

}