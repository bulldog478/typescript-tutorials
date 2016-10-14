var join = require('path').join
module.exports = {
	entry: join(__dirname, "./src/main.ts"),
	output: {
		path: "./dist",
		publicPath:"dist/",
		filename:'bundle.js'
	},
	resolve: {
		extensions : ['','.ts','.js']
	},
	module: {
		loaders: [
			{
				test:/\.ts$/,
				loader:'awesome-typescript-loader'
			},
			{
				test:/\.html$/,
				loader:'raw-loader'
			}
		]
	},
	devtool:"sourcemap"
}