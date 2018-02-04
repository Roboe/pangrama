import React, { Component } from 'react';
import { compose } from '../helpers/functional';
import {
  trim as prepareSentence
} from '../helpers/strings';

class PangramInput extends Component {
  handleChange = compose(
    this.props.updateSentence,
    prepareSentence,
    (event) => event.target.value,
  )

  render = () => (
    <div className="pc-text-field">
      <input type="text" id="pangram-input" className="pc-text-field--input"
        defaultValue={ this.props.sentence }
        onChange={ this.handleChange }
      />
      <label htmlFor="pangram-input" className="pc-text-field--label">Pangram</label>
    </div>
  )
}

export default PangramInput;
