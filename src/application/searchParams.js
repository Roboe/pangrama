import { decode, encode } from './encoding'
import { pipe } from './helpers/functional'

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
        a: a ? oldDecode(a) : undefined,
        p: p ? oldDecode(p) : undefined,
      }
    }
  }
}

export const writeSearchParamsToUrl = (origin, alphabet, sentence) => {
  const url = new URL(origin)

  const encoded = encode(alphabet, sentence)

  if (encoded?.base.length > 0) {
    url.searchParams.append('b', encoded.base)
  }
  if (encoded?.alphabet.length > 0) {
    url.searchParams.append('a', encoded.alphabet)
  }
  if (encoded?.sentence.length > 0) {
    url.searchParams.append('s', encoded.sentence)
  }
  url.searchParams.append('v', '2')

  return url
}
