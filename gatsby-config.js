/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `timeleft`,
    siteUrl: `https://www.timeleft.ir`,
  },
  plugins: [
    `postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Time Left`,
        short_name: `Time Left`,
        start_url: `/`,
        background_color: `#101828`,
        theme_color: `#101828`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
        {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:400,500,700`,
        ],
        display: 'swap'
      }
    },
  ],
}
