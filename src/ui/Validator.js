import React from 'react'
import CountersList from './presentational/CountersList'
import {
  prepareForValidating as prepareSentence,
  countAllLetters,
} from '../application/pangram'

const Validator = ({ alphabet, sentence }) => {
  const lowercaseSentence = prepareSentence(sentence)
  const countedLetters = countAllLetters(alphabet, lowercaseSentence)

  return <CountersList results={countedLetters} />
}

export default Validator
