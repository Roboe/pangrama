import React, {Component} from 'react';
import LetterCounter from './LetterCounter';

class Validator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countedLetters: this.countAllLetters(props.alphabet, props.sentence),
    };
  }

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

  render() {
    const {countedLetters} = this.state;

    return (
      <ul className="output-letters">
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
