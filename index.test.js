const { reverseString } = require('./index')

test('reserve a string', () => {
  const result = reverseString('miyako')
  expect(result).toEqual('okayim')
})
