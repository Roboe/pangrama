// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { useRef } from 'react'

const TextField = ({
  id,
  defaultValue,
  handleChange,
  label,
  isMultiline,
  ...props
}) => {
  const inputRef = useRef()
  const Component = isMultiline ? 'textarea' : 'input'

  const selectText = () => {
    inputRef.current?.select()
  }

  return (
    <div className="pc-text-field pc-text-field_with-label">
      <Component
        type="text"
        ref={inputRef}
        id={id}
        className="pc-text-field--input"
        defaultValue={defaultValue}
        onChange={handleChange}
        {...props}
      />
      <label
        htmlFor={id}
        className="pc-text-field--label"
        onClick={isMultiline ? selectText : undefined}
      >
        {label}
      </label>
    </div>
  )
}

export default TextField
