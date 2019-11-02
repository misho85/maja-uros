const path = require('path');

const website = require('./config/website');

module.exports = {
  siteMetadata: {
    title: website.siteTitle,
    description: website.siteDescription,
    logo: website.siteLogo,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.siteTitle,
        short_name: website.siteShortName,
        start_url: `/`,
        background_color: website.manifestBackgroundColor,
        theme_color: website.manifestThemeColor,
        display: website.manifestDisplay,
        icon: website.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~src': path.resolve(__dirname, 'src'),
          '~config': path.resolve(__dirname, 'config'),
          '~data': path.resolve(__dirname, 'data'),
        },
        extensions: ['.js', '.json', '.jsx'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
