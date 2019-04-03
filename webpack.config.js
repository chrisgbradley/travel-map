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
					"css-loader"
				]
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new webpack.HotModuleReplacementPlugin()
	]
};