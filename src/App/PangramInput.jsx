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
      id="pangram-input"
      label="Pangrama"
      isMultiline
      rows={3}
      inputProps={{
        defaultValue: sentence,
        onChange: handleChange,
      }}
    />
  )
}

export default PangramInput
