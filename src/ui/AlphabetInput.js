import React, { Component } from 'react'
import { compose } from '../application/helpers/functional'
import { prepare as prepareAlphabet } from '../application/alphabet'

const UIAlphabetInput = ({ alphabet, handleChange }) => (
  <div className="pc-text-field">
    <input
      type="text"
      id="alphabet-input"
      className="pc-text-field--input"
      defaultValue={alphabet}
      onChange={handleChange}
    />
    <label htmlFor="alphabet-input" className="pc-text-field--label">
      Alphabet
    </label>
  </div>
)

class AlphabetInput extends Component {
  handleChange = compose(
    this.props.updateAlphabet,
    prepareAlphabet,
    (event) => event.target.value
  )

  render = () => (
    <UIAlphabetInput
      alphabet={this.props.alphabet}
      handleChange={this.handleChange}
    />
  )
}

export default AlphabetInput
