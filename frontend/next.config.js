const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
require("dotenv").config();

module.exports = withCSS({
	env: {
		API_URL: process.env.API_URL
	}
});