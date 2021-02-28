import React from 'react'
import { compose } from '../application/helpers/functional'
import { prepare as prepareAlphabet } from '../application/alphabet'
import TextField from './presentational/TextField'

const AlphabetInput = ({ alphabet, updateAlphabet }) => {
  const handleChange = compose(
    updateAlphabet,
    prepareAlphabet,
    (event) => event.target.value
  )

  return (
    <TextField
      id="alphabet-input"
      label="Alphabet"
      defaultValue={alphabet}
      handleChange={handleChange}
    />
  )
}

export default AlphabetInput
