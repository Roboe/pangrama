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
      <main className="App">
        <section className="input-fields">
          <AlphabetInput defaultAlphabet={alphabet} updateAlphabet={this.updateAlphabet} />
          <PangramInput sentence={sentence} updateSentence={this.updateSentence}/>
        </section>
        <section className="output-validations">
          <Validator alphabet={alphabet} />
        </section>
      </main>
    );
  }
}

export default App;
