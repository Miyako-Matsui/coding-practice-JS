const { reverseString, reverseSentence } = require('./index')

test('reverse a string', () => {
  const result = reverseString('miyako')
  expect(result).toEqual('okayim')
})

test('reverse a sentence', () => {
  const result = reverseSentence('miyako loves SB')
  expect(result).toEqual('SB loves miyako')
})
