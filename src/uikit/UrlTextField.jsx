// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { useRef } from 'react'

import BaseTextField from './BaseTextField'

const UrlTextField = ({ value, handleClick, buttonChildren, ...props }) => {
  const { inputProps } = props

  const inputRef = useRef()

  const handleClickButton = () => {
    handleClick()
    inputRef.current?.select()
  }

  return (
    <BaseTextField
      ref={inputRef}
      className="pc-text-field_with-action"
      {...props}
      inputProps={{
        ...inputProps,
        type: 'url',
        value: value,
        readOnly: true,
      }}
    >
      <button className="pc-text-field--button" onClick={handleClickButton}>
        {buttonChildren}
      </button>
    </BaseTextField>
  )
}

export default UrlTextField
