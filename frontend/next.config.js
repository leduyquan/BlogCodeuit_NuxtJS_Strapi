const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
require('dotenv').config();


module.exports = withPlugins([
    [withSass],
    [withImages],
    {
        env: {
            API_URL: process.env.API_URL,
        },
    }
  ]);
// module.exports = withPlugins(
//     [
//         [
//             withSass
//         ],
//     ],
//     {
//         env: {
//             API_URL: process.env.API_URL,
//         },
//         /* global config here ... */
//     }
// );

