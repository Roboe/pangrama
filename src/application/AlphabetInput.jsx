import TextField from '../ui/TextField'

import { pipe } from './helpers/functional'

import { prepare as prepareAlphabet } from './alphabet'

const AlphabetInput = ({ alphabet, updateAlphabet }) => {
  const handleChange = pipe(
    (event) => event.target.value,
    prepareAlphabet,
    updateAlphabet,
  )

  return (
    <TextField
      id="alphabet-input"
      label="Alfabeto"
      defaultValue={alphabet}
      handleChange={handleChange}
    />
  )
}

export default AlphabetInput
