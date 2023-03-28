const answer = require('./index')

test('reverse a string', () => {
  const result = answer.reverseString('miyako')
  expect(result).toEqual('okayim')
})

test('reverse a sentence', () => {
  const result = answer.reverseSentence('miyako loves SB')
  expect(result).toEqual('SB loves miyako')
})

test('find the minimum vale in a list', () => {
  const array = [1, 2, 3]
  const expected = 1
  const actual = answer.findMinValue(array)
  expect(actual).toBe(expected)
})

test('find the maximum value in a list', () => {
  const array = [4, 5, 6]
  const expected = 6
  const actual = answer.findMaxValue(array)
  expect(actual).toBe(expected)
})

test('find all unique values in an array', () => {
  const array = [1, 3, 5, 3, 7, 3, 1, 1, 5]
  const expected = [1, 3, 5, 7]
  const actual = answer.duplicatesValue(array)
  expect(actual).toEqual(expected)
})

test('count the unique value in an array', () => {
  const array = [1, 3, 5, 3, 7, 3, 1, 1, 5]
  const expected = { 1: 3, 3: 3, 5: 2, 7: 1 } //arrayをobjectで返す
  const actual = answer.countValues(array)
  expect(actual).toEqual(expected)
})
