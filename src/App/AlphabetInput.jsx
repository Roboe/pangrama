// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { prepare as prepareAlphabet } from '../core/alphabet'
import { pipe } from '../libs/functional'
import LabeledTextField from '../uikit/LabeledTextField'

const AlphabetInput = ({ alphabet, updateAlphabet }) => {
  const handleChange = pipe(
    (event) => event.target.value,
    prepareAlphabet,
    updateAlphabet,
  )

  return (
    <LabeledTextField
      label="Alfabeto"
      inputProps={{
        id: 'alphabet-input',
        defaultValue: alphabet,
        onChange: handleChange,
      }}
    />
  )
}

export default AlphabetInput
