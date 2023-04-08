// SPDX-FileCopyrightText: 2023 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { useRef } from 'react'

import BaseTextField from './BaseTextField'

const LabeledTextField = ({ label, ...props }) => {
  const {
    inputProps: { id },
    isMultiline,
  } = props

  const inputRef = useRef()

  const selectText = () => {
    inputRef.current?.select()
  }

  return (
    <BaseTextField
      ref={inputRef}
      className="pc-text-field_with-label"
      {...props}
    >
      <label
        htmlFor={id}
        className="pc-text-field--label"
        onClick={isMultiline ? selectText : undefined}
      >
        {label}
      </label>
    </BaseTextField>
  )
}

export default LabeledTextField
