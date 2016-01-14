var path = require('path');

module.exports = {
	entry: {
		app: ['./src/less/base.less', './src/main.js']
	},
	output: {
		path: path.resolve(__dirname, '../dist/static'),
		publicPath: '/static/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel!eslint',
			exclude: /node_modules/
		}, {
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'url',
			query: {
				limit: 10000,
				name: '[name].[ext]?[hash]'
			}
		}]
	},

	// vue-loader config:
	vue: {
		loaders: {
			js: 'babel!eslint'
		},
		autoprefixer: {
			browsers: ['last 4 versions']
		}
	},
	eslint: {
		formatter: require('eslint-friendly-formatter')
	}
}