import TextField from '../ui/TextField'

import { pipe } from './helpers/functional'

import { prepareForShowing as prepareSentence } from './pangram'

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
      isMultiline
      rows={3}
      defaultValue={sentence}
      handleChange={handleChange}
    />
  )
}

export default PangramInput
