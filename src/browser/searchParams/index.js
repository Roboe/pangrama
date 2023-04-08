// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
// SPDX-FileCopyrightText: 2021 Álvaro Cuesta (alvaro-cuesta)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { pipe } from '../../libs/functional'

import { decode, encode } from './encoding'

const oldDecode = pipe(atob, decodeURIComponent)

export const readFromSearchParams = (searchParams) => {
  const search = new URLSearchParams(searchParams)

  const version = search.get('v')

  switch (version) {
    case '2': {
      const b = search.get('b')
      const a = search.get('a')
      const s = search.get('s')

      const decoded = decode(b, a, s)

      return {
        a: decoded.alphabet,
        p: decoded.sentence,
      }
    }

    // If no version, assume old base64 encoding
    default: {
      const a = search.get('a')
      const p = search.get('p')

      return {
        a: a !== null ? oldDecode(a) : undefined,
        p: p !== null ? oldDecode(p) : undefined,
      }
    }
  }
}

export const writeSearchParamsToUrl = (origin, alphabet, sentence) => {
  const url = new URL(origin)

  const encoded = encode(alphabet, sentence)

  if (
    encoded?.base.length > 0 ||
    encoded?.alphabet.length > 0 ||
    encoded?.sentence.length > 0
  ) {
    url.searchParams.append('b', encoded.base)
    url.searchParams.append('a', encoded.alphabet)
    url.searchParams.append('s', encoded.sentence)
    url.searchParams.append('v', '2')
  }

  return url
}
