// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import UrlField from '../ui/UrlField'

import { writeSearchParamsToUrl } from './searchParams'

const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) return false
  try {
    navigator.clipboard.writeText(text)
  } catch (error) {
    console.error('Copy to clipboard failed', error)
  }
}

const Share = ({ alphabet, sentence, children }) => {
  const url = writeSearchParamsToUrl(window.location.origin, alphabet, sentence)

  const handleCopyButton = () => {
    copyTextToClipboard(url.href)
  }

  return (
    <UrlField
      value={url.href}
      handleClick={handleCopyButton}
      buttonChildren={children}
    />
  )
}

export default Share
