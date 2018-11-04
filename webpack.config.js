module.exports = {
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/dist/assets/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ['env', 'stage-0', 'react']
				}
			}
		]
	}
}