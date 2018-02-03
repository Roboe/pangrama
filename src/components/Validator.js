import React, {Component} from 'react';
import LetterCounter from './LetterCounter';

class Validator extends Component {
  countOccurrences(letterToCount, sentence) {
    return [...sentence].filter(
      (currentLetter) => currentLetter === letterToCount
    ).length;
  }

  countAllLetters(alphabet, sentence) {
    return [...alphabet].map(
      (letterToCount) => ({
        letter: letterToCount,
        occurrences: this.countOccurrences(letterToCount, sentence),
      })
    );
  }

  prepareSentence(sentence) {
    return sentence.toLowerCase();
  }

  render() {
    const {alphabet, sentence} = this.props;

    const preparedSentence = this.prepareSentence(sentence);
    const countedLetters = this.countAllLetters(alphabet, preparedSentence);

    return (
      <ul className="pc-counters-list">
        {countedLetters.map(
          ({letter, occurrences}) => <LetterCounter
            letter={letter}
            occurrences={occurrences}
            key={`letter-${letter}`}
          />
        )}
      </ul>
    );
  }
}

export default Validator;
