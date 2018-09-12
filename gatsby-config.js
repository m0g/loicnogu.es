module.exports = {
  siteMetadata: {
    title: 'Loïc Nogues: Freelance Web Dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`
      }
    },
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
  ],
}
