function shift(arr) {
  let first = arr[0];

  if (arr.length === 0) {
    return undefined;
  }
  
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]