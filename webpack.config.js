const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	entry: './assets/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve('./website/js')
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						},
						'postcss-loader'
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('./../css/style.css'),
		new StyleLintPlugin({
			configFile: './.stylelintrc',
			context: './assets/',
			files: ['**/*.css']
		})
	]
};
