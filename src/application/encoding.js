import { takeWhile } from './helpers/array'
import { deduplicate } from './helpers/string'

// FROM: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
//
// We don't use .-_!~*'() because they might be cut from automatic URL detectors
// (for example, when sharing on messaging applications, forums, etc.) or
// confused as Markdown formatting ¯\_(ツ)_/¯
const URLSAFE_ALPHABET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export const changeBase = (fromDigits, fromBase, toBase) => {
  // 1. Transform the digits of our number (radix fromBase) into an intermediate BigInt (radix 10)
  const fromBaseN = BigInt(fromBase)
  const bigint = fromDigits.reduce((acc, digit, i, { length }) => {
    const digitN = BigInt(digit)
    const numberIndexN = BigInt(length - 1 - i)

    // Avoid Babel transpiling ** to Math.pow(), which doesn't work with BigInt
    // https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator
    // Probably bailouts JIT optimization, but it's faster than manual exponentiation anyway
    return acc + digitN * eval('fromBaseN ** numberIndexN')
  }, 0n)

  // 2. Transform the intermediate BigInt (radix 10) into digits of the destination number (radix toBase)
  const toBaseN = BigInt(toBase)
  const result = []

  let value = bigint
  while (value > 0n) {
    result.unshift(Number(value % toBaseN))
    value /= toBaseN
  }

  // 3. Make sure we preserve leading zeroes
  const leadingZeros = takeWhile(fromDigits, (digit) => digit === 0)

  return [...leadingZeros, ...result]
}

export const toUrlSafe = (plain, plainBase) =>
  changeBase(plain, plainBase, URLSAFE_ALPHABET.length)
    .map((x) => URLSAFE_ALPHABET[x])
    .join('')

export const fromUrlSafe = (encoded, plainBase) => {
  const encodedInts = [...encoded].map((x) => URLSAFE_ALPHABET.indexOf(x))

  if (!encodedInts.every((x) => x >= 0 && x < URLSAFE_ALPHABET.length)) {
    throw new Error('Invalid encoding')
  }

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
  const base = deduplicate([...alphabet, ...sentence])

  const intAlphabet = [...alphabet].map((x) => base.indexOf(x))
  const intSentence = [...sentence].map((x) => base.indexOf(x))

  return {
    base: btoaSafe(base),
    alphabet: toUrlSafe(intAlphabet, base.length),
    sentence: toUrlSafe(intSentence, base.length),
  }
}

export const decode = (encodedBase, encodedAlphabet, encodedSentence) => {
  let base, alphabet, sentence

  try {
    base = [...atobSafe(encodedBase)]
  } catch (err) {
    console.error('Could not parse base', err)

    return {
      alphabet: undefined,
      sentence: undefined,
    }
  }

  try {
    alphabet = fromUrlSafe(encodedAlphabet, base.length)
      .map((x) => base[x])
      .join('')
  } catch (err) {
    console.error('Could not parse alphabet', err)
  }

  try {
    sentence = fromUrlSafe(encodedSentence, base.length)
      .map((x) => base[x])
      .join('')
  } catch (err) {
    console.error('Could not parse sentence', err)
  }

  return { alphabet, sentence }
}
