import React from 'react'
import { withSize } from 'react-sizeme'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flip: false };
  }

  render() {
    console.log(this.props.size);
    return (
      <div id="index" className={this.state.flip ? 'flip' : ''}>
        <h1>🥖 Loïc Nogues</h1>
        <fieldset>
          <legend>📝 Information</legend>
          <p>Freelance Web developer in <span id="city">Berlin</span>.</p>
          <p>Here is my <a href="mailto:nogues.loic@gmail.com">Email</a> and also my <a href="https://github.com/m0g" target="_blank">Github</a> profile</p>
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
          <p id="marquee" style={{ width: `${this.props.size.width - 37}px` }}>
            <span className="first">React ⚡ Redux ⚡ Vue ⚡ Angular.js ⚡ D3.js ⚡ Firebase ⚡ Node.js ⚡ MongoDB ⚡ SQL (MySQL, Postgres) ⚡ Ubuntu ⚡ Vagrant </span>
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