function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, count) {
  arr.length = count;
  return arr;
}

function lastNOf(arr, count) {
  if (count > arr.length) return arr;
  return arr.slice(arr.length - count)
}

function endsOf(beginningArr, endingArr) {
  let new_arr = [];
  new_arr.push(beginningArr[0]);
  new_arr.push(endingArr[endingArr.length - 1]);
  return new_arr;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
