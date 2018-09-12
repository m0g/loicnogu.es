import React from 'react'
import { withSize } from 'react-sizeme'

import Fieldset from '../components/fieldset'
import Skillz from '../components/skillz'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  render() {
    return (
      <div id="index" className={this.state.flip ? 'flip' : ''}>
        <h1>🥖 Loïc Nogues</h1>
        {this.props.data.allMarkdownRemark.edges.map(({ node }) =>
          node.fileAbsolutePath.match(/information/) &&
          <Fieldset node={node} key={node.fileAbsolutePath} />
        )}
        {this.props.data.allMarkdownRemark.edges.map(({ node }) =>
          node.fileAbsolutePath.match(/project/) &&
          <Fieldset node={node} key={node.fileAbsolutePath} />
        )}
        {this.props.data.allMarkdownRemark.edges.map(({ node }) =>
          node.fileAbsolutePath.match(/skillz/) &&
          <Skillz node={node} key={node.fileAbsolutePath} size={this.props.size} />
        )}
      </div>
    );
  }
}

export default withSize()(IndexPage)

export const query = graphql`
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
`
