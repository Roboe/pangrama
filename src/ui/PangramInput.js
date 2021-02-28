import React from 'react'
import { compose } from '../application/helpers/functional'
import { prepareForShowing as prepareSentence } from '../application/pangram'
import TextField from './presentational/TextField'

const PangramInput = ({ sentence, updateSentence }) => {
  const handleChange = compose(
    updateSentence,
    prepareSentence,
    (event) => event.target.value
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
