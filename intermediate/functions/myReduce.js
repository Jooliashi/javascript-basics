function myReduce(array, func, initial) {
  let newArray;
  if (!initial) {
    initial = array[0]
    newArray = array.slice(1)
  } else {
    newArray = array;
  }

  newArray.forEach(ele => {
    initial = func(initial, ele);
  });

  return initial;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

longestWord(['abc', 'launch', 'targets', '']);      // "targets"
