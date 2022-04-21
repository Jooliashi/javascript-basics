function slice(arr, startIndex, endIndex) {
  let new_arr = [];
  let count = 0;
  for (let i = startIndex; i < endIndex; i++) {
    new_arr[count] = arr[i];
    count += 1;
  }
  return new_arr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]