import React from 'react'
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

const PangramInput = ({ sentence, updateSentence }) => {
  const handleChange = compose(
    updateSentence,
    prepareSentence,
    (event) => event.target.value
  )

  return <UIPangramInput sentence={sentence} handleChange={handleChange} />
}

export default PangramInput
