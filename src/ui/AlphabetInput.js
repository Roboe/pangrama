import React from 'react'
import { pipe } from '../application/helpers/functional'
import { prepare as prepareAlphabet } from '../application/alphabet'
import TextField from './presentational/TextField'

const AlphabetInput = ({ alphabet, updateAlphabet }) => {
  const handleChange = pipe(
    (event) => event.target.value,
    prepareAlphabet,
    updateAlphabet,
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
