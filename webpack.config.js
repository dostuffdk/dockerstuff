var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'./assets/app.js'
	],
	output: {
		path: './website/js', // set the output for all handled files, also css
		filename: 'app.js'
	},
	plugins: [
		new ExtractTextPlugin("./../css/style.css", {allChunks: false}) // we need to step back so we dont put css files in the js dir
	],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader')
			}
		]
	}
};
