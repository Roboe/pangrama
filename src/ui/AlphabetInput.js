import React from 'react'
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

const AlphabetInput = ({ alphabet, updateAlphabet }) => {
  const handleChange = compose(
    updateAlphabet,
    prepareAlphabet,
    (event) => event.target.value
  )

  return <UIAlphabetInput alphabet={alphabet} handleChange={handleChange} />
}

export default AlphabetInput
