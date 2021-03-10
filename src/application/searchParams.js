import { pipe } from './helpers/functional'

const encode = pipe(encodeURIComponent, btoa)

const decode = pipe(atob, decodeURIComponent)

export const readFromSearchParams = (searchParams) => {
  const search = new URLSearchParams(searchParams)
  const a = search.get('a')
  const p = search.get('p')

  return {
    a: a ? decode(a) : undefined,
    p: p ? decode(p) : undefined,
  }
}

export const writeSearchParamsToUrl = (origin, alphabet, sentence) => {
  const url = new URL(origin)
  url.searchParams.append('a', encode(alphabet))
  url.searchParams.append('p', encode(sentence))

  return url
}
