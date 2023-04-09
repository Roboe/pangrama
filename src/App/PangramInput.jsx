// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { pipe } from '../libs/functional'
import { prepareForShowing as prepareSentence } from '../core/pangram'
import LabeledTextField from '../uikit/LabeledTextField'

const PangramInput = ({ sentence, updateSentence }) => {
  const handleChange = pipe(
    (event) => event.target.value,
    prepareSentence,
    updateSentence,
  )

  return (
    <LabeledTextField
      label="Pangrama"
      isMultiline
      inputProps={{
        id: 'pangram-input',
        defaultValue: sentence,
        onChange: handleChange,
        rows: 3,
      }}
    />
  )
}

export default PangramInput
