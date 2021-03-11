export const makeArray = (length, fn) =>
  Array(length)
    .fill()
    .map((_, i) => fn(i))
