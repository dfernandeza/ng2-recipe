'use strict';

var path = require('path');

// Webpack Plugins
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {

	devtool: 'source-map',
  	debug: true,

    /*entry: [
	    'webpack/hot/dev-server',
	    //'webpack-dev-server/client?http://localhost:8080',
	    path.resolve(__dirname, 'src/vendor.ts'),
	    path.resolve(__dirname, 'src/main.ts')
    ],*/

    entry: {
    	vendor: path.resolve(__dirname, 'src/vendor.ts'),
    	main: path.resolve(__dirname, 'src/main.ts')
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        //publicPath: '/build/',
        //filename: 'bundle.js'
        filename: '[name].bundle.js',
    	sourceMapFilename: '[name].map'
    },

	resolve: {
		extensions: ['', '.ts', '.js']
	},

	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	},

    plugins: [
    	// generating html
    	new HtmlWebpackPlugin({ template: 'src/index.html', inject: false }),
        new CopyWebpackPlugin([ 
            { from: 'src/assets', to: 'assets' },
            { from: 'src/fixtures', to: 'fixtures'}
        ]),
    ]
};