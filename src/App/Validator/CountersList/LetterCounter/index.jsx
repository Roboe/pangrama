// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import './style.css'

function getValidationClass(letterOccurrences) {
  const valuation = letterOccurrences > 0 ? 'pass' : 'fail'
  return `pc-letter-counter_${valuation}`
}

const LetterCounter = ({ letter, occurrences }) => (
  <li
    className={`pc-counters-list--item pc-letter-counter ${getValidationClass(
      occurrences,
    )}`}
  >
    <span className="pc-letter-counter--character">{letter}</span>
    <span className="pc-letter-counter--number">{occurrences}</span>
  </li>
)

export default LetterCounter
