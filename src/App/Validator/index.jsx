// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import {
  prepareForValidating as prepareSentence,
  countAllLetters,
} from '../../core/pangram'

import CountersList from './CountersList'

const Validator = ({ alphabet, sentence }) => {
  const lowercaseSentence = prepareSentence(sentence)
  const countedLetters = countAllLetters(alphabet, lowercaseSentence)

  return <CountersList results={countedLetters} />
}

export default Validator
