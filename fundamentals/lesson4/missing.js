function missing(arr) {
  let new_arr = [];
  for (let num = arr[0]; num <= arr[arr.length - 1]; num++) {
    if (arr.indexOf(num) === -1) {
      new_arr.push(num);
    }
  }
  return new_arr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));    