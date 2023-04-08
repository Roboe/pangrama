// SPDX-FileCopyrightText: 2020 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { pipe } from '../libs/functional'
import { trim, lowercase, isEqualTo as isLetter } from '../libs/string'

export const prepareForShowing = trim

export const prepareForValidating = pipe(trim, lowercase)

const countOccurrences = (letter, sentence) =>
  [...sentence].filter(isLetter(letter)).length

const countLetterIn = (sentence) => (letter) => ({
  letter: letter,
  occurrences: countOccurrences(letter, sentence),
})

export const countAllLetters = (alphabet, sentence) =>
  [...alphabet].map(countLetterIn(sentence))
