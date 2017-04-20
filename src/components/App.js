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
      <div id="pangram-checker">
        <header className="pc-header">
          <span className="pc-header--title">Pangram Checker</span>
        </header>
        <main className="pc-body">
          <section className="pc-body--section">
            <AlphabetInput
              defaultAlphabet={alphabet}
              updateAlphabet={this.updateAlphabet}
            />
            <PangramInput
              sentence={sentence}
              updateSentence={this.updateSentence}
            />
          </section>
          <section className="pc-body--section">
            <Validator
              alphabet={alphabet}
              sentence={sentence}
            />
          </section>
          <footer className="pc-footer">
            <span className="pc-footer--credits"><a href="http://virgulilla.com" target="_blank">Made by @RoboePi 🦉</a></span>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
