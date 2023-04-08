// SPDX-FileCopyrightText: 2023 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { forwardRef } from 'react'

import './style.css'

const BaseTextField = forwardRef(
  ({ isMultiline, className, inputProps = {}, children }, inputRef) => {
    const Component = isMultiline ? 'textarea' : 'input'

    const classNames = ['pc-text-field', className].join(' ').trim()

    return (
      <div className={classNames}>
        <Component
          type="text"
          ref={inputRef}
          className="pc-text-field--input"
          {...inputProps}
        />
        {children}
      </div>
    )
  },
)

export default BaseTextField
