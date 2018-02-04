import React, { Component } from 'react';
import LetterCounter from './LetterCounter';
import { compose } from '../helpers/functional';
import { trim, lowercase, isEqualTo as isLetter } from '../helpers/strings';

const prepareSentence = compose(lowercase, trim);

const countOccurrences = (letter, sentence) => [...sentence]
  .filter(isLetter(letter))
  .length;

const countLetterIn = (sentence) => (letter) => ({
  letter: letter,
  occurrences: countOccurrences(letter, sentence),
});

const countAllLetters = (alphabet, sentence) => [...alphabet]
  .map(countLetterIn(sentence));


class Validator extends Component {
  renderLetterCounter = ({ letter, occurrences }) => (
    <LetterCounter
      letter={ letter }
      occurrences={ occurrences }
      key={ `letter-${ letter }` }
    />
  )

  render() {
    const { alphabet, sentence } = this.props;

    const lowercaseSentence = prepareSentence(sentence);
    const countedLetters = countAllLetters(alphabet, lowercaseSentence);

    return (
      <ul className="pc-counters-list">
        { countedLetters.map(this.renderLetterCounter) }
      </ul>
    );
  }
}

export default Validator;
