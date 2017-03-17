import React, { Component } from 'react';

class AlphabetInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  prepareAlphabet(alphabet) {
    const alphabetObject = [...alphabet.trim().toLowerCase()].reduce(
      (newAlphabet, letter) => {
        newAlphabet[letter] = undefined;
        return newAlphabet;
      },
      {},
    );
    return Object.keys(alphabetObject).join('');
  }

  handleChange(event) {
    this.props.updateAlphabet(this.prepareAlphabet(event.target.value));
  }

  render() {
    return (
      <div className="input-container">
        <label htmlFor="alphabet-input">Alphabet: </label>
        <input type="text" id="alphabet-input"
          defaultValue={this.props.defaultAlphabet}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AlphabetInput;
