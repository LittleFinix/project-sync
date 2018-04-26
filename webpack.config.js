const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = true;

var config = {
		entry: {
			app: path.resolve(__dirname, 'website', 'main.tsx')
		},
		devtool: 'source-map',

		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'build')
		},
		node: {
		  __dirname: false,
		  __filename: false
		},

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.ya?ml$/,
					include: path.resolve(__dirname, 'data'),
					use: [ 'json-loader', 'yaml-loader' ]
				},
				{
					test: /\.(css|sass)$/,

					use: ExtractTextPlugin.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						],
						fallback: 'style-loader'
					})
				},
				{
					test: /\.(html|png|svg|jpeg|gif|woff2|woff|eot|ttf|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: (file) => isDev ? '[name].[ext]' : '[hash].[ext]',
								publicPath: '/',
								context: './website',
								
							}
						}
					]
				}
			]
		},

		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
		},

		plugins: [
			// new UglifyJSPlugin({ sourceMap: true }),
			new ExtractTextPlugin('app.css'),
		]
	};

module.exports = config;