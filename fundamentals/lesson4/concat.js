function concat(arrOne, arrTwo) {
  let new_arr = [];

  for (let i = 0; i < arrOne.length; i++) {
    push(new_arr, arrOne[i]);
  }

  for (let i = 0; i < arrTwo.length; i++) {
    push(new_arr, arrTwo[i]);
  }

  return new_arr;
}

function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

console.log(concat([1, 2, 3], [4, 5, 6]));