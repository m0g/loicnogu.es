import React from 'react'
import { withSize } from 'react-sizeme'

import Information from './../components/information'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  render() {
    console.log(this.props.data);
    return (
      <div id="index" className={this.state.flip ? 'flip' : ''}>
        <h1>🥖 Loïc Nogues</h1>
        {this.props.data.allMarkdownRemark.edges.map(({ node }) =>
          node.fileAbsolutePath.match(/information/) &&
          <Information node={node} key={node.fileAbsolutePath} />
        )}
        <fieldset>
          <legend>💡 Projects</legend>
          <ul>
            <li>
              <a href="https://github.com/liveblog/liveblog" target="_blank">Sourcefabric/Liveblog</a>
              : Open source live blogging CMS
            </li>
            <li>
              <a href="https://github.com/ansel-app/ansel" target="_blank">Ansel</a>
              : Digital image organizer powered by the web (also open source)
            </li>
            <li>
              <a href="https://praise.press" target="_blank">Praise</a>
              : seed-stage journalism startup (NMA W18)
            </li>
            <li>
              <a href="https://codeforafrica.github.io/BigShotsNew/" target="_blank">BigShots</a>
              : Land grabbing in Mozambique (data Viz)
            </li>
            <li>This wonderful website you are currently staring at</li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>🏆 Skillz</legend>
          <p id="marquee" style={{ width: `${this.props.size.width - 37}px` }}>
            <span className="first">React ⚡ Redux ⚡ Vue ⚡ Angular.js ⚡ D3.js ⚡ Firebase ⚡ Node.js ⚡ MongoDB ⚡ MySQL ⚡ Postgres ⚡ Ubuntu ⚡ Vagrant ⚡ Electron.js ⚡ ReactNative ⚡ Gulp ⚡ Webpack ⚡ TypeScript</span>
          </p>
        </fieldset>
        <button onClick={() => this.setState({ flip: !this.state.flip })}>
          Do not click here
        </button>
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
