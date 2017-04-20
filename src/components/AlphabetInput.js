import React, { Component } from 'react';

class AlphabetInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  prepareAlphabet(alphabet) {
    const lettersDictionary = [...alphabet.trim().toLowerCase()].reduce(
      (newAlphabet, letter) => {
        newAlphabet[letter] = undefined;
        return newAlphabet;
      },
      {},
    );
    return Object.keys(lettersDictionary).join('');
  }

  handleChange(event) {
    this.props.updateAlphabet(this.prepareAlphabet(event.target.value));
  }

  render() {
    return (
      <div className="pc-io-container">
        <label htmlFor="alphabet-input">Alphabet</label>
        <input type="text" id="alphabet-input"
          defaultValue={this.props.defaultAlphabet}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AlphabetInput;
