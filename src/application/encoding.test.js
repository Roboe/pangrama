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

const ENCODED_BASE =
  'BCB6l1Nwbax8KaK6yHCr3gxgiofAuN7jzAGkgKJqsfeq3q8MxPMplhVTBdYRhHgXHdeTTHbOQEP8'
const ENCODED_ALPHABET = 'AuaTZe9Ax7qrVczdWCEm0SBBCm58EQ'
const ENCODED_SENTENCE =
  'FM7EO4Z1BL4acq8kxEKZ2l7VfzTEaFjjByP4Vym99TnaatwVaTZBA4Z9oznz6qg5D65skYfKj34jEtomiF5Pnd7bAUFTj0lOBu0ixWuiM'

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
      expect(toUrlSafe([1, 0, 0], 10)).toEqual('Bm')
    })

    it('Preserves leading zeroes', () => {
      expect(toUrlSafe([0, 0, 0], 10)).toEqual('AAA')
    })
  })

  describe('fromUrlSafe', () => {
    it('Works', () => {
      expect(fromUrlSafe('Bm', 10)).toEqual([1, 0, 0])
    })

    it('Preserves leading zeroes', () => {
      expect(fromUrlSafe('AAA', 10)).toEqual([0, 0, 0])
    })
  })
})

describe('btoaSafe/Atob', () => {
  describe('btoaSafe', () => {
    it('Works', () => {
      expect(btoaSafe('Hello World!')).toEqual('dInqmtbQujDk82nX')
    })

    it('Supports >1 byte Unicode characters', () => {
      expect(btoaSafe('☸☹☺☻☼☾☿')).toEqual('CJe49NpNlutlFb0KsSmDDApp2Ytyv')
    })
  })

  describe('atobSafe', () => {
    it('Works', () => {
      expect(atobSafe('dInqmtbQujDk82nX')).toEqual('Hello World!')
    })

    it('Supports >1 byte Unicode characters', () => {
      expect(atobSafe('CJe49NpNlutlFb0KsSmDDApp2Ytyv')).toEqual('☸☹☺☻☼☾☿')
    })
  })
})

describe('encode/decode', () => {
  it('Encodes correctly', () => {
    expect(encode(PLAIN_ALPHABET, PLAIN_SENTENCE)).toEqual({
      base: ENCODED_BASE,
      alphabet: ENCODED_ALPHABET,
      sentence: ENCODED_SENTENCE,
    })
  })

  it('Decodes correctly', () => {
    expect(decode(ENCODED_BASE, ENCODED_ALPHABET, ENCODED_SENTENCE)).toEqual({
      alphabet: PLAIN_ALPHABET,
      sentence: PLAIN_SENTENCE,
    })
  })

  it('Is more efficient than the old method', () => {
    const { base, alphabet, sentence } = encode(PLAIN_ALPHABET, PLAIN_SENTENCE)

    const urlParams = `b=${base}&a=${alphabet}&s=${sentence}&v=2`
    const lengthRatio = urlParams.length / OLD_FORMAT_URL_PARAMS.length

    expect(lengthRatio).toEqual(0.6143250688705234) // Quite the weight loss!
  })
})
