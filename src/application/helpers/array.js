// SPDX-FileCopyrightText: 2021 Álvaro Cuesta (alvaro-cuesta)
// SPDX-FileCopyrightText: 2021 Roberto MF (Roboe)
//
// SPDX-License-Identifier: GPL-3.0-or-later

export const makeArray = (length, fn) =>
  Array(length)
    .fill()
    .map((_, i) => fn(i))

export const takeWhile = (arr, predicate) => {
  let lastIndex = 0
  while (predicate(arr[lastIndex])) {
    lastIndex++
  }

  return arr.slice(0, lastIndex)
}
