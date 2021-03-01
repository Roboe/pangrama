import CountersList from '../ui/CountersList'

import {
  prepareForValidating as prepareSentence,
  countAllLetters,
} from './pangram'

const Validator = ({ alphabet, sentence }) => {
  const lowercaseSentence = prepareSentence(sentence)
  const countedLetters = countAllLetters(alphabet, lowercaseSentence)

  return <CountersList results={countedLetters} />
}

export default Validator
