import React from 'react';

const LetterCounter = ({letter, occurrences}) => (
  <li className="letter-counter">
    <span>{letter}</span>
    <span>{occurrences}</span>
  </li>
);

export default LetterCounter;
