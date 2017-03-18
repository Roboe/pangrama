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
      <div id="app">
        <header className="app-header">
          <span className="app-title">Pangram Checker</span>
        </header>
        <main className="app-body">
          <section className="input-fields">
            <AlphabetInput
              defaultAlphabet={alphabet}
              updateAlphabet={this.updateAlphabet}
            />
            <PangramInput
              sentence={sentence}
              updateSentence={this.updateSentence}
            />
          </section>
          <section className="output-validations">
            <Validator
              alphabet={alphabet}
              sentence={sentence}
            />
          </section>
          <footer className="app-footer">
            <span className="app-credits"><a href="http://virgulilla.com" target="_blank">Made by @RoboePi 🦉</a></span>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
