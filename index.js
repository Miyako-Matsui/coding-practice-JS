function reverseString(word) {
  return word.split('').reverse().join('')
}

// function reverseString(str) {
//   var newString = ''
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i]
//   }
//   return newString
// }

module.exports = { reverseString }
