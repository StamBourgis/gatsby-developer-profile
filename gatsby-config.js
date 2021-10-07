/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      //example notes file .txt files, remove if not needed for live
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      //example notes file .txt files, remove if not needed for live
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/content/`,
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
  siteMetadata: {
    title: "Web Developer",
    description: "web dev portfolio",
    copyright: "This website is copyright Web Developer 2021",
    contact: "stam.bourgkis@gmail.com"
  },
}
