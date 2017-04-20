import React from 'react';

const LetterCounter = ({letter, occurrences}) => (
  <li className="pc-counters-list--item pc-letter-counter">
    <span>{letter}</span>
    <span>{occurrences}</span>
  </li>
);

export default LetterCounter;
