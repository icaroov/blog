require('dotenv').config()
const queries = require('./src/graphql/algolia-query.ts')

module.exports = {
  siteMetadata: {
    title: 'Icaro Oliveira',
    position: 'Desenvolvedor Web',
    description: 'A blog about frontend development and other cool stuff.',
    author: '@icaroov',
    siteUrl: 'https://icarooliveira.dev.br',
    social: {
      instagram: 'https://www.instagram.com/icaroov/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 100,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        aliases: {
          console: `bash`,
          dosini: `ini`,
          env: `bash`,
          jsx: `jsx`,
          es6: `js`,
          flowchart: `none`,
          gitignore: `none`,
          gql: `graphql`,
          htaccess: `apacheconf`,
          mdx: `markdown`,
          ml: `fsharp`,
          sh: `bash`,
          styl: `stylus`,
          terminal: `bash`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Icaro Oliveira`,
        short_name: `Icaro`,
        start_url: `/`,
        background_color: `#1e1f29`,
        theme_color: `#1e1f29`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#50FA7B',
        showSpinner: true,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
  ],
}
