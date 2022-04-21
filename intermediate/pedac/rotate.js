/*
input: integer
output: integer
rules: rotate the integer one digit to the left
  by keeping the left just rotated integer fixed
  735291 - rotate once and keep index 0 fixed
         - rotate again and keep index 1 fixed
         keep going until only 2 digits needed to be rotated
test cases:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
maxRotation(NaN);
data type:
number - string/array
algorithmn:
  declare an empty array for results
  turn integer into an array of digits
  declare current array = original array
  iterate through the index of the array
    take that index as starting index and length of array - 1 as end index
    slice from start index to end index out of the current array
    rotate the array (helper method)
    reassign current array to empty + rotated array
    save the first digit of rotated array to empty array
  move on to the next start index
  return occupied array but join and turned into a number
*/

function maxRotation(int) {
  let result = [];
  let currentArr = String(int).split('');
  for (i = 0; i < currentArr.length; i += 1) {
    let rotatingArr = currentArr.slice(i);
    let rotated = rotateRightmostDigits(rotatingArr);
    currentArr = result.concat(rotated);
    result.push(rotated[0]);
  }
  return Number(result.join(''));
}

function rotateRightmostDigits(arr) {
  arr.push(arr.shift());
  return arr;
}

console.log(maxRotation(735291));;          // 321579
console.log(maxRotation(3));;               // 3
console.log(maxRotation(35));;              // 53
console.log(maxRotation(105));;             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));;      // 7321609845
