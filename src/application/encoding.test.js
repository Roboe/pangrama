import {
  changeBase,
  toUrlSafe,
  fromUrlSafe,
  btoaSafe,
  atobSafe,
  encode,
  decode,
} from './encoding'

const PLAIN_ALPHABET = 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz'
const PLAIN_SENTENCE =
  'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.'

const ENCODED_A =
  'B9GRdylJO0u60LAZRJqD0-RrVHrArTcqPOV_RNp8SxynHlRaCyp_Lr9sXNccsrWlC04fDW-cTeZ'
const ENCODED_B = 'AMXolWZb-yGxWvg8.CX0UHP-5JGOO1'
const ENCODED_C =
  'CfkFKG0uK7j-k9u8y5FuRDbewGFWK5TinRhHE89sml6ve7m9Q8aIdRt1ztyA.c9l-1_0yKG-XGhyzpAsf3mO1TaAstDr27XzrbL3DKc7'

const OLD_FORMAT_URL_PARAMS =
  'a=YSVDMyVBMWJjZGUlQzMlQTlmZ2hpJUMzJUFEamtsbW4lQzMlQjFvJUMzJUIzcHFyc3R1JUMzJUJBJUMzJUJDdnd4eXo%3D&p=UXUlQzMlQTklMjBleHRyYW9yZGluYXJpYXMlMjBzZXIlQzMlQURhbiUyMGFtYmFzJTIwZnVuY2lvbmFsaWRhZGVzLiUyMFBlcnRpbmF6JTIwbWUlMjB2ZXIlQzMlQTklMjBhYmFsYW56JUMzJUExbmRvbWUlMjBjdWFsJTIwcGVkaWclQzMlQkNlJUMzJUIxbyUyMGVtJUMzJUJBJTIwYWwlMjBqYW0lQzMlQjNuJTIweSUyMGFsJTIwd2hpc2t5Lg%3D%3D'

describe('changeBase', () => {
  it('Works', () => {
    expect(changeBase([1, 0, 1], 2, 10)).toEqual([5])
    expect(changeBase([5], 10, 2)).toEqual([1, 0, 1])
  })

  it('Preserves leading zeroes', () => {
    expect(changeBase([0, 1, 0, 1], 2, 10)).toEqual([0, 5])
    expect(changeBase([0, 5], 10, 2)).toEqual([0, 1, 0, 1])
  })
})

describe('to/fromUrlSafe', () => {
  describe('toUrlSafe', () => {
    it('Works', () => {
      expect(toUrlSafe([1, 0, 0], 10)).toEqual('Bj')
    })

    it('Preserves leading zeroes', () => {
      expect(toUrlSafe([0, 0, 0], 10)).toEqual('AAA')
    })
  })

  describe('fromUrlSafe', () => {
    it('Works', () => {
      expect(fromUrlSafe('Bj', 10)).toEqual([1, 0, 0])
    })

    it('Preserves leading zeroes', () => {
      expect(fromUrlSafe('AAA', 10)).toEqual([0, 0, 0])
    })
  })
})

describe('btoaSafe/Atob', () => {
  describe('btoaSafe', () => {
    it('Works', () => {
      expect(btoaSafe('Hello World!')).toEqual('OWVRBUAMqlvZHiJt')
    })

    it('Supports >1 byte Unicode characters', () => {
      expect(btoaSafe('☸☹☺☻☼☾☿')).toEqual('lRvlg0gNYGmuYHfBQGKvNZG2aFsH')
    })
  })

  describe('atobSafe', () => {
    it('Works', () => {
      expect(atobSafe('OWVRBUAMqlvZHiJt')).toEqual('Hello World!')
    })

    it('Supports >1 byte Unicode characters', () => {
      expect(atobSafe('lRvlg0gNYGmuYHfBQGKvNZG2aFsH')).toEqual('☸☹☺☻☼☾☿')
    })
  })
})

describe('encode/decode', () => {
  it('Encodes correctly', () => {
    expect(encode(PLAIN_ALPHABET, PLAIN_SENTENCE)).toEqual({
      a: ENCODED_A,
      b: ENCODED_B,
      c: ENCODED_C,
    })
  })

  it('Decodes correctly', () => {
    expect(decode(ENCODED_A, ENCODED_B, ENCODED_C)).toEqual({
      alphabet: PLAIN_ALPHABET,
      sentence: PLAIN_SENTENCE,
    })
  })

  it('Is more efficient than the old method', () => {
    const { a, b, c } = encode(PLAIN_ALPHABET, PLAIN_SENTENCE)

    const urlParams = `a=${a}&b=${b}&c=${c}`
    const lengthRatio = urlParams.length / OLD_FORMAT_URL_PARAMS.length

    expect(lengthRatio).toEqual(0.5977961432506887) // Quite the weight loss!
  })
})
