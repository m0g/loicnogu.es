import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import favicon from '../favicon.ico'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
          meta={[
            { name: 'theme-color', content: '#00d800' },
            { name: 'description', content: 'Loïc Nogues Freelance Web Developer in Berlin' },
            { name: 'keywords', content: 'freelance, web, developer, berlin, javascript, react' },
            { name: 'og:url', content: 'https://loicnogu.es' },
            { name: 'og:type', content: 'Website' },
            { name: 'og:title', content: data.site.siteMetadata.title },
            { name: 'og:description', content: 'Loïc Nogues Freelance Web Developer in Berlin' },
          ]}
        />
        <div
          style={{
          }}
        >
          {children}
        </div>
      </div>
    )} />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout