module.exports = {
  reverseString,
  reverseSentence,
  findMinValue,
  findMaxValue,
  duplicatesValue,
  countValues,
  findSumTarget,
}

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

function findMinValue(array) {
  const min = Math.min(...array)
  return min
}

function findMaxValue(array) {
  const max = Math.max(...array)
  return max
}

function duplicatesValue(array) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }
  let unique = array.filter(onlyUnique)
  return unique
}

function countValues(array) {
  const counts = {}
  for (var i = 0; i < array.length; i++) {
    counts[array[i]] = 1 + (counts[array[i]] || 0)
  }

  return counts
}

function findSumTarget(array, target) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push(i, j)
        console.log(result)
      }
    }
  }
  return result
}
