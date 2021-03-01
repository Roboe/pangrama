import React from 'react'
import LetterCounter from './LetterCounter'
import {
  prepareForValidating as prepareSentence,
  countAllLetters,
} from '../application/pangram'

const renderLetterCounter = ({ letter, occurrences }) => (
  <LetterCounter
    letter={letter}
    occurrences={occurrences}
    key={`letter-${letter}`}
  />
)

const Validator = ({ alphabet, sentence }) => {
  const lowercaseSentence = prepareSentence(sentence)
  const countedLetters = countAllLetters(alphabet, lowercaseSentence)

  return (
    <ul className="pc-counters-list">
      {countedLetters.map(renderLetterCounter)}
    </ul>
  )
}

export default Validator
