/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata:{
    title:"Cooktionary",
    desccription: "Nice and optimized recipe site",
    authour: "@josephsamirL",
    person:{name:"john", age:32},
    simpleData: ["item 1", "item 2"],
    complexData: [{name:"john", age:32},{name:"joseph", age:35}]
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oa2uqq8x3m82`,
        
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400","500","600","700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`
],
}
