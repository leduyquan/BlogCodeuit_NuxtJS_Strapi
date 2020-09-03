const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
require("dotenv").config();

module.exports = withSass({
	env: {
		API_URL: process.env.API_URL
	},
	//cssModules: true,
	// cssLoaderOptions: {
	// 	importLoaders: 1,
	// 	localIdentName: "[local]___[hash:base64:5]",
	// }
});