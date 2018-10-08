import React from 'react'
import { withSize } from 'react-sizeme'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Fieldset from '../components/fieldset'
import Skillz from '../components/skillz'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query MarkDownQuery {
            allMarkdownRemark {
              edges {
                node {
                  html
                  fileAbsolutePath
                  frontmatter {
                    title
                  } 
                }
              }
            }
          }
        `}
        render={data => (
          <Layout>
            <div id="index" className={this.state.flip ? 'flip' : ''}>
              <h1>🥖 Loïc Nogues</h1>
              {data.allMarkdownRemark.edges.map(({ node }) =>
                node.fileAbsolutePath.match(/information/) &&
                <Fieldset node={node} key={node.fileAbsolutePath} />
              )}
              {data.allMarkdownRemark.edges.map(({ node }) =>
                node.fileAbsolutePath.match(/project/) &&
                <Fieldset node={node} key={node.fileAbsolutePath} />
              )}
              {data.allMarkdownRemark.edges.map(({ node }) =>
                node.fileAbsolutePath.match(/skillz/) &&
                <Skillz node={node} key={node.fileAbsolutePath} size={this.props.size} />
              )}
            </div>
          </Layout>
        )} />
    );
  }
}

export default withSize()(IndexPage)