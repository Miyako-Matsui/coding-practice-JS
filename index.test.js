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

test('find the index numbers whose sum is 6 from an array', () => {
  const array = [3, 3, 4, 10, 18]
  const target = 6
  const expected = [0, 1]
  const actual = answer.findSumTarget(array, target)
  expect(actual).toEqual(expected)
})

test('check if a symbol wins in tic-tac-toe game', () => {
  const game = [
    ['X', 'X', 'X'],
    [4, 5, 6],
    [7, 8, 9],
  ]

  const symbol = 'X'
  const expected = true
  const actual = answer.checkWin(game, symbol)
  expect(actual).toEqual(expected)
})

test('replace specific elements', () => {
  const array = ['a1', 'a2', 'a3', 'a4', 'a5']
  const num1 = 0
  const num2 = 3
  const expected = ['red', 'green', 'yellow', 'a4', 'a5']
  const actual = answer.replace(array, num1, num2)
  expect(actual).toEqual(expected)
})

test('add two numbers', () => {
  const arrayOne = [2, 4, 3]
  const arrayTwo = [5, 6, 4]
  const expected = [7, 0, 8]
  const actual = answer.addTwoNumbers(arrayOne, arrayTwo)
  expect(actual).toEqual(expected)
})

test('reverse number', () => {
  const num = -123
  const expected = -321
  const actual = answer.reverseNumber(num)
  expect(actual).toEqual(expected)
})
