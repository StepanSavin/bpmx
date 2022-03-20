// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Bpmx',
  titleTemplate: '%s | Bpmx',
  siteUrl: 'https://stepansavin.github.io',
  pathPrefix: '/bpmx',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
};
