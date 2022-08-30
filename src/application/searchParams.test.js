// SPDX-FileCopyrightText: 2021 Álvaro Cuesta (alvaro-cuesta)
// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { readFromSearchParams } from './searchParams'

const PLAIN_ALPHABET = 'aábcdeéfghiíjklmnñoópqrstuúüvwxyz'
const PLAIN_SENTENCE =
  'El vikingo farfulló: ¡Carámbanos! ¿Quién dijo que Zambia existiría? ¡Sin pingüinos, ñus ni hielo! Tú, un whisky.'

const V2_ENCODED_BASE =
  'BCB6l1Nwbax8KaK6yHCr3gxgiofAuN7jzAGkgKJqsfeq3q8MxPMplhVTBdYRhHgXHdeTTHbOQEP8'
const V2_ENCODED_ALPHABET = 'AuaTZe9Ax7qrVczdWCEm0SBBCm58EQ'
const V2_ENCODED_SENTENCE =
  'FM7EO4Z1BL4acq8kxEKZ2l7VfzTEaFjjByP4Vym99TnaatwVaTZBA4Z9oznz6qg5D65skYfKj34jEtomiF5Pnd7bAUFTj0lOBu0ixWuiM'

const V1_ENCODED_ALPHABET =
  'YSVDMyVBMWJjZGUlQzMlQTlmZ2hpJUMzJUFEamtsbW4lQzMlQjFvJUMzJUIzcHFyc3R1JUMzJUJBJUMzJUJDdnd4eXo%3D'
const V1_ENCODED_SENTENCE =
  'RWwlMjB2aWtpbmdvJTIwZmFyZnVsbCVDMyVCMyUzQSUyMCVDMiVBMUNhciVDMyVBMW1iYW5vcyElMjAlQzIlQkZRdWklQzMlQTluJTIwZGlqbyUyMHF1ZSUyMFphbWJpYSUyMGV4aXN0aXIlQzMlQURhJTNGJTIwJUMyJUExU2luJTIwcGluZyVDMyVCQ2lub3MlMkMlMjAlQzMlQjF1cyUyMG5pJTIwaGllbG8hJTIwVCVDMyVCQSUyQyUyMHVuJTIwd2hpc2t5Lg%3D%3D'

describe('Version 2', () => {
  let originalError

  beforeEach(() => {
    originalError = console.error
    console.error = jest.fn()
  })

  afterEach(() => {
    console.error = originalError
  })

  it('Works', () => {
    const searchParams = `?b=${V2_ENCODED_BASE}&a=${V2_ENCODED_ALPHABET}&s=${V2_ENCODED_SENTENCE}&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: PLAIN_ALPHABET,
      p: PLAIN_SENTENCE,
    })
  })

  it('Supports empty alphabet', () => {
    const searchParams = `?b=${V2_ENCODED_BASE}&a=&s=${V2_ENCODED_SENTENCE}&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: '',
      p: PLAIN_SENTENCE,
    })
  })

  it('Supports missing alphabet', () => {
    const searchParams = `?b=${V2_ENCODED_BASE}&s=${V2_ENCODED_SENTENCE}&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: undefined,
      p: PLAIN_SENTENCE,
    })
  })

  it('Supports empty sentence', () => {
    const searchParams = `?b=${V2_ENCODED_BASE}&a=${V2_ENCODED_ALPHABET}&s=&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: PLAIN_ALPHABET,
      p: '',
    })
  })

  it('Supports missing sentence', () => {
    const searchParams = `?b=${V2_ENCODED_BASE}&a=${V2_ENCODED_ALPHABET}&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: PLAIN_ALPHABET,
      p: undefined,
    })
  })

  it('Does not crash on empty base', () => {
    const searchParams = `?b=&a=${V2_ENCODED_ALPHABET}${V2_ENCODED_ALPHABET}&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: undefined,
      p: undefined,
    })
  })

  it('Does not crash on missing base', () => {
    const searchParams = `?a=${V2_ENCODED_ALPHABET}${V2_ENCODED_ALPHABET}&v=2`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: undefined,
      p: undefined,
    })
  })
})

describe('No version', () => {
  it('Works', () => {
    const searchParams = `?a=${V1_ENCODED_ALPHABET}&p=${V1_ENCODED_SENTENCE}`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: PLAIN_ALPHABET,
      p: PLAIN_SENTENCE,
    })
  })

  it('Support missing alphabet', () => {
    const searchParams = `?p=${V1_ENCODED_SENTENCE}`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: undefined,
      p: PLAIN_SENTENCE,
    })
  })

  it('Support empty alphabet', () => {
    const searchParams = `?a=&p=${V1_ENCODED_SENTENCE}`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: '',
      p: PLAIN_SENTENCE,
    })
  })

  it('Support missing sentence', () => {
    const searchParams = `?a=${V1_ENCODED_ALPHABET}`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: PLAIN_ALPHABET,
      p: undefined,
    })
  })

  it('Support empty sentence', () => {
    const searchParams = `?a=${V1_ENCODED_ALPHABET}&p=`

    expect(readFromSearchParams(searchParams)).toEqual({
      a: PLAIN_ALPHABET,
      p: '',
    })
  })
})
