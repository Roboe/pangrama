// SPDX-FileCopyrightText: 2017 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

import LetterCounter from './LetterCounter'

import './style.css'

const CountersList = ({ results }) => (
  <ul className="pc-counters-list">
    {results.map(({ letter, occurrences }) => (
      <LetterCounter letter={letter} occurrences={occurrences} key={letter} />
    ))}
  </ul>
)

export default CountersList
