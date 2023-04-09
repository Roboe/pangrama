// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import classNames from 'classnames'

import './style.css'

const doesPassValitation = (letterOccurrences) => letterOccurrences > 0

const LetterCounter = ({ letter, occurrences }) => {
  const isValid = doesPassValitation(occurrences)

  return (
    <li
      className={classNames('pc-counters-list--item', 'pc-letter-counter', {
        'pc-letter-counter_pass': isValid,
        'pc-letter-counter_fail': !isValid,
      })}
    >
      <span className="pc-letter-counter--character">{letter}</span>
      <span className="pc-letter-counter--number">{occurrences}</span>
    </li>
  )
}

export default LetterCounter
