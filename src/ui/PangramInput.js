import React, { Component } from 'react'
import { compose } from '../application/helpers/functional'
import { prepareForShowing as prepareSentence } from '../application/pangram'

const UIPangramInput = ({ sentence, handleChange }) => (
  <div className="pc-text-field">
    <input
      type="text"
      id="pangram-input"
      className="pc-text-field--input"
      defaultValue={sentence}
      onChange={handleChange}
    />
    <label htmlFor="pangram-input" className="pc-text-field--label">
      Pangram
    </label>
  </div>
)
class PangramInput extends Component {
  handleChange = compose(
    this.props.updateSentence,
    prepareSentence,
    (event) => event.target.value
  )

  render = () => (
    <UIPangramInput
      sentence={this.props.sentence}
      handleChange={this.handleChange}
    />
  )
}

export default PangramInput
