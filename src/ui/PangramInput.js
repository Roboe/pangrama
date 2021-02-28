import React from 'react'
import { pipe } from '../application/helpers/functional'
import { prepareForShowing as prepareSentence } from '../application/pangram'
import TextField from './presentational/TextField'

const PangramInput = ({ sentence, updateSentence }) => {
  const handleChange = pipe(
    (event) => event.target.value,
    prepareSentence,
    updateSentence,
  )

  return (
    <TextField
      id="pangram-input"
      label="Pangram"
      defaultValue={sentence}
      handleChange={handleChange}
    />
  )
}

export default PangramInput
