const { reverseString, reverseSentence } = require('./index')

test('reserve a string', () => {
  const result = reverseString('miyako')
  expect(result).toEqual('okayim')
})

test('reserve a sentence', () => {
  const result = reverseSentence('miyako loves SB')
  expect(result).toEqual('SB loves miyako')
})
