const path = require('path');

module.exports = {
	entry: './assets/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve('./website/js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	}
};
