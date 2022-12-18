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

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ')
}
module.exports = { reverseString, reverseSentence }
