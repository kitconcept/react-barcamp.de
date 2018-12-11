import React from 'react'
import PropTypes from 'prop-types'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <meta
            name="google-site-verification"
            content="wXlh381BgLztoeqVBLM1C1rHcz8DyRFPeoa7UVHl5ic"
          />
        </Helmet>

        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
