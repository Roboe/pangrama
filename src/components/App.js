import React, { Component } from 'react';
import AlphabetInput from './AlphabetInput';
import PangramInput from './PangramInput';
import Validator from './Validator';
import NewTabLink from './presentational/NewTabLink';
import Emoji from './presentational/Emoji';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz',
      sentence: 'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia exisitiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.',
    };

    this.updateAlphabet = this.updateAlphabet.bind(this);
    this.updateSentence = this.updateSentence.bind(this);
  }

  updateAlphabet(newAlphabet) {
    this.setState({
      alphabet: newAlphabet,
    });
  }

  updateSentence(newSentence) {
    this.setState({
      sentence: newSentence,
    });
  }

  render() {
    const { alphabet, sentence } = this.state;

    return (
      <div id="pangram-checker" className="pc-structure">
        <div className="pc-structure--header">
          <header className="pc-header">
            <span className="pc-header--title">Pangram Checker</span>
          </header>
        </div>
        <div className="pc-structure--body">
          <main className="pc-main">
            <section className="pc-main--section">
              <AlphabetInput
                alphabet={ alphabet }
                updateAlphabet={ this.updateAlphabet }
              />
              <PangramInput
                sentence={ sentence }
                updateSentence={ this.updateSentence }
              />
            </section>
            <section className="pc-main--section">
              <Validator
                alphabet={ alphabet }
                sentence={ sentence }
              />
            </section>
          </main>
          <footer className="pc-footer">
            <span className="pc-footer--credits">
              Made by <NewTabLink url="http://virgulilla.com">@RoboePi</NewTabLink> <Emoji emoji="&#x1f989;" label="Owl" />
            </span>
            <span className="pc-footer--license">
              <NewTabLink url="https://github.com/Roboe/pangrama">Source</NewTabLink> (GPLv3)
            </span>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
