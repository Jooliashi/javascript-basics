function oddElementsOf(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      new_arr.push(arr[i])
    }
  }
  return new_arr;
}

function combine(arr) {
  return arr.concat(arr.slice().reverse());
}

function sortDescending(arr) {
  return arr.slice().sort(function(a, b) {
    return b - a
  });
}

function matrixSums(arr) {
  let sumArr = [];
  for (let index = 0; index < arr.length; index++) {
    sumArr.push(sum(arr[index]));
  }
  return sumArr;
}

function sum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

function uniqueElements(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (newArr.includes(arr[index]) === false) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));