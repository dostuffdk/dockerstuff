var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
	entry: [
		'./assets/app.js'
	],
	output: {
		path: './website/js', // set the output for all handled files, also css
		filename: 'app.js'
	},
	plugins: [
		new ExtractTextPlugin("./../css/style.css", {allChunks: false}), // we need to step back so we dont put css files in the js dir
		new StyleLintPlugin({
			configFile: './.stylelintrc',
			context: './assets/',
			files: ['**/*.css', '**/*.vue']
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.(js|vue)/,
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					plugins: ['transform-runtime']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=1!postcss-loader')
			}
		]
	},
	postcss: function() {
		return [
			require('postcss-import'),
			require('postcss-cssnext')
		];
	},
	eslint: {
		failOnWarning: false,
		failOnError: true
	}
};
