import React, { Component } from 'react'
import LetterCounter from './LetterCounter'
import {
  prepareForValidating as prepareSentence,
  countAllLetters,
} from '../application/pangram'

class Validator extends Component {
  renderLetterCounter = ({ letter, occurrences }) => (
    <LetterCounter
      letter={letter}
      occurrences={occurrences}
      key={`letter-${letter}`}
    />
  )

  render() {
    const { alphabet, sentence } = this.props

    const lowercaseSentence = prepareSentence(sentence)
    const countedLetters = countAllLetters(alphabet, lowercaseSentence)

    return (
      <ul className="pc-counters-list">
        {countedLetters.map(this.renderLetterCounter)}
      </ul>
    )
  }
}

export default Validator
