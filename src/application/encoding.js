import { makeArray } from './helpers/array'
import { reverse } from './helpers/string'

// FROM: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
//
// We don't use !~*'() because they might be cut from automatic URL detectors
// (for example, when sharing on messaging applications, forums, etc.) or
// confused as Markdown formatting ¯\_(ツ)_/¯
const URLSAFE_ALPHABET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'

export const changeBase = (fromDigits, fromBase, toBase) => {
  // 1. Transform our number into a BigInt
  const fromBaseN = BigInt(fromBase)
  const bigint = reverse(fromDigits).reduce(
    (acc, digit, i) => acc + BigInt(digit) * fromBaseN ** BigInt(i),
    0n,
  )

  // 2. Transform the BigInt into our destination base
  const toBaseN = BigInt(toBase)
  const result = []

  let value = bigint
  while (value > 0n) {
    result.push(Number(value % toBaseN))
    value /= toBaseN
  }

  // 3. Make sure we preserve leading zeroes
  let leadingZeros = 0
  for (let i = 0; fromDigits[i] === 0 && i < fromDigits.length; i++) {
    leadingZeros++
  }

  return [...makeArray(leadingZeros, () => 0), ...reverse(result)]
}

export const toUrlSafe = (plain, plainBase) =>
  changeBase(plain, plainBase, URLSAFE_ALPHABET.length)
    .map((x) => URLSAFE_ALPHABET[x])
    .join('')

export const fromUrlSafe = (encoded, plainBase) => {
  const encodedInts = encoded.split('').map((x) => URLSAFE_ALPHABET.indexOf(x))

  return changeBase(encodedInts, URLSAFE_ALPHABET.length, plainBase)
}

// Why not use btoa/atob? Fails on some Unicode strings
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa#unicode_strings
//
// Notice this is probably not btoa/atob compatible (didn't even bother
// checking), and also does not add padding!
export const btoaSafe = (string) =>
  toUrlSafe(new TextEncoder().encode(string), 256)

export const atobSafe = (string) =>
  new TextDecoder().decode(new Uint8Array(fromUrlSafe(string, 256)))

// Encode/Decode
// These are the only public functions that should be `export`ed,
// but I still wanted to unit-test everything else
export const encode = (alphabet, sentence) => {
  const uniqueAlphabet = [...new Set([...alphabet, ...sentence])]
  const alphabetIndexed = alphabet
    .split('')
    .map((x) => uniqueAlphabet.indexOf(x))
  const indexedSentence = sentence
    .split('')
    .map((x) => uniqueAlphabet.indexOf(x))

  const a = btoaSafe(uniqueAlphabet.join(''))
  const b = toUrlSafe(alphabetIndexed, uniqueAlphabet.length)
  const c = toUrlSafe(indexedSentence, uniqueAlphabet.length)

  return { a, b, c }
}

export const decode = (a, b, c) => {
  const uniqueAlphabet = atobSafe(a).split('')

  const alphabet = fromUrlSafe(b, uniqueAlphabet.length)
    .map((x) => uniqueAlphabet[x])
    .join('')
  const sentence = fromUrlSafe(c, uniqueAlphabet.length)
    .map((x) => uniqueAlphabet[x])
    .join('')

  return { alphabet, sentence }
}
