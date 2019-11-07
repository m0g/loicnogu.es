module.exports = {
  siteMetadata: {
    title: 'Loïc Nogues: Freelance Web Dev',
    description: 'Loïc Nogues Freelance Web Developer in Berlin',
    siteUrl: 'https://loicnogu.es'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },

        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]    }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-no-javascript',
  ],
}
