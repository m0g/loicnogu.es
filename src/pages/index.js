import React from 'react'
import Link from 'gatsby-link'
import WordCloud from 'wordcloud'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  render() {
    return (
      <div id="index" className={this.state.flip ? 'flip' : ''}>
        <h1>Loïc Nogues</h1>
        <fieldset>
          <legend>📝 Information</legend>
          <p>Freelance Web developer in Berlin.</p>
          <p><a href="mailto:nogues.loic@gmail.com">Email</a> <a href="https://github.com/m0g" target="_blank">Github</a></p>
        </fieldset>
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
              : Make journalism great again
            </li>
            <li>This wonderful website you are currently staring at</li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>🏆 Skillz</legend>
          <ul>
            <li>D3.js</li>
            <li>React / Redux</li>
            <li>Vue</li>
            <li>Angular.js</li>
            <li>Firebase</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>SQL (MySQL, Postgres)</li>
          </ul>
        </fieldset>
        <button onClick={() => this.setState({ flip: !this.state.flip })}>
          Do not click here
        </button>
      </div>
    );
  }
}

export default IndexPage
