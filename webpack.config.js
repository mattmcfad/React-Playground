module.exports = {
	entry: './src/index.jsx',
	output: {
		path: 'build',
		filename: 'index.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: 'src'
		}, {
			test: /\.jsx$/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules']
	}
};