var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/index.js',
	output: {
		publicPath: '/',
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015','stage-0','react']
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?module"
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false}
		})
	]
}