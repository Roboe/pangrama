import React from 'react';
import LetterCounter from './LetterCounter';

const Validator = ({alphabet}) => (
  <div className="output-letters">
    {[...alphabet].map(
      (letter) => <LetterCounter letter={letter}></LetterCounter>
    )}
  </div>
);

export default Validator;
