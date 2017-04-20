import React, { Component } from 'react';
import AlphabetInput from './AlphabetInput';
import PangramInput from './PangramInput';
import Validator from './Validator'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: 'abcdefghijklmnñoprstuvwxyz',
      sentence: 'El husky vietnamita excava en busca de galletas. Su quijotesco dueño sube una foto a la web con presteza.',
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
    const {alphabet, sentence} = this.state;

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
                defaultAlphabet={alphabet}
                updateAlphabet={this.updateAlphabet}
              />
              <PangramInput
                sentence={sentence}
                updateSentence={this.updateSentence}
              />
            </section>
            <section className="pc-main--section">
              <Validator
                alphabet={alphabet}
                sentence={sentence}
              />
            </section>
          </main>
          <footer className="pc-footer">
            <span className="pc-footer--credits">
              Made by <a href="http://virgulilla.com" target="_blank">@RoboePi</a> <span className="emoji">🦉</span>
            </span>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
