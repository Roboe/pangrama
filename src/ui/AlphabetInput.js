import React, { Component } from 'react';
import { compose } from '../application/helpers/functional';
import { prepare as prepareAlphabet } from '../application/alphabet';


class AlphabetInput extends Component {
  handleChange = compose(
    this.props.updateAlphabet,
    prepareAlphabet,
    (event) => event.target.value,
  )

  render = () => (
    <div className="pc-text-field">
      <input type="text" id="alphabet-input" className="pc-text-field--input"
        defaultValue={ this.props.alphabet }
        onChange={ this.handleChange }
      />
      <label htmlFor="alphabet-input" className="pc-text-field--label">Alphabet</label>
    </div>
  )
}

export default AlphabetInput;
