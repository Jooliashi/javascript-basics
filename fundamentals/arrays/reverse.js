function reverse(inputForReversal) {
  let output;
  if (Array.isArray(inputForReversal)) {
    output = [];
  } else {
    output = '';
  }

  for (let i = inputForReversal.length - 1; i >= 0; i--) {
    if (Array.isArray(inputForReversal)) {
      output.push(inputForReversal[i]);
    } else {
      output += inputForReversal[i];
    }
  }

  return output;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]