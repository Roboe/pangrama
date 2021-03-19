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
