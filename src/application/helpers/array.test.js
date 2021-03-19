import { takeWhile } from './array'

describe('takeWhile', () => {
  const isZero = (value) => value === 0
  const isEven = (number) => number % 2 === 0

  it('Works', () => {
    expect(takeWhile([0, 0, 1], isZero)).toEqual([0, 0])
    expect(takeWhile([2, 4, 5, 6], isEven)).toEqual([2, 4])
  })

  it('Returns the whole array when the predicate is always met', () => {
    expect(takeWhile([0, 0], isZero)).toEqual([0, 0])
    expect(takeWhile([2, 4, 6], isEven)).toEqual([2, 4, 6])
  })

  it('Returns an empty array when the predicate is not met', () => {
    expect(takeWhile([1, 2, 3], isZero)).toEqual([])
    expect(takeWhile([1], isEven)).toEqual([])
    expect(
      takeWhile(['no', 'number'], (value) => typeof value === 'number'),
    ).toEqual([])
  })
})
