const path = require( "path" );
const CleanWebpackPlugin = require( "clean-webpack-plugin" );
const webpack = require( "webpack" );

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
    contentBase: './dist',
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				 use: [
					"style-loader",
					 { loader: "css-loader", options: { importLoaders: 1 } },
					 "postcss-loader"
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				query: {
					"presets": [
						"@babel/preset-env",
						"@babel/preset-react"
					]
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};