import React, { Component } from 'react';
import { compose } from '../helpers/functional';
import { trim, lowercase, deduplicate } from '../helpers/strings';

const prepareAlphabet = compose(deduplicate, lowercase, trim);

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
