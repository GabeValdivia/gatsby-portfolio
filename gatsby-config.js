module.exports = {
  siteMetadata: {
    title: `Gabe Valdivia - Portfolio`,
    description: `Git repos.`,
    author: `@tcollins`,

    githubUser: 'GabeValdivia',
    backgroundImage: `${__dirname}/src/images/unsplash-man-coding.jpg`,
    theme: 'dark',
  },
  pathPrefix: 'gatsby-portolio',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
