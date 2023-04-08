// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { writeSearchParamsToUrl } from '../browser/searchParams'
import UrlTextField from '../uikit/UrlTextField'

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
    <UrlTextField
      value={url.href}
      handleClick={handleCopyButton}
      buttonChildren={children}
    />
  )
}

export default Share
