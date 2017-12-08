module.exports = {

	entry  : __dirname + '/src/index.js',
	output : {
		path      : __dirname + '/dist',
		publicPath: '/dist/',
		filename  : 'bundle.js',
	},
	devServer: {
		headers: { "Access-Control-Allow-Origin": "*" }
	},
	devtool: 'source-map',
	module : {
		loaders: [
			{
				test   : /\.js$/,
				loader : 'babel-loader',
				exclude: /node_modules|libs|assets/,
				query  : {
					cacheDirectory: true,
					presets       : ['es2015', 'stage-0', 'react'],
				},
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' }, // ?sourceMap
			{
				test  : /\.scss$/,
				loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap',
			},
			{
				test   : /\.html$/,
				exclude: /node_modules/,
				loader : 'raw-loader',
			},
		],
	},

}