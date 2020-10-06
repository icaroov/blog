module.exports = {
  siteMetadata: {
    title: 'My Personal Blog',
    position: 'Desenvolvedor Web',
    description: 'A blog about frontend development and other cool stuff.',
    author: '@icaroov',
    social: {
      instagram: 'https://www.instagram.com/icaroov/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#663399',
        showSpinner: true,
      },
    },
  ],
}
