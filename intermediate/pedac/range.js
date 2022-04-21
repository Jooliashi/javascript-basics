/*
input: a string
output: an array
rules:
  input string inlcudes digits, seperators and comma
  if it's -, : , .. , this means all the numbers between the two should show
  if it's comma only, then inbetween numbers ignored
  should always assume the next digit is bigger
    if the number is smaller than the last digit of current number
    assume it represents the last (couple) digit with previous increased by 1
test cases:
  range("1, 3, 7, 2, 4, 1")  // [ 1, 3, 7, 12, 14, 21]
  range("1-3, 1-2") // [1, 2, 3, 11, 12]
  range("1:5:2") // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  range("104-2") // [104, 105, 106, 107, 108, 109, 110, 111, 112]
  range("104-02") // [104...202]
  range("545, 64:11") // [545, 564...611]
  range("0, 0") // [0, 10]
  range("0..0") // [0...10]
  range(1..5-2) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
Data Type:
  number, and strings
  array
Algorithm:
  declare an empty array
  need to split string by first ,
  then split again into subarrays by seperators
  iterate through the array of subarrays
    if it's one elements, add to the empty array
    iterate through subarray
    declare new subarray
    compare each element to the last element of empty array
      if last element is undefined
      add directly to the subarray
    convert matching number digits to number ('04' vs '02')
    if second > first, leave it 
    if second < first, add 1 to missing digits from number 1 
    and add that to second number as the beginning
    add the new second number to new subarray
    loop through new subarray and add each inbetween numbers to empty array
  return the empty array
*/

// eslint-disable-next-line max-lines-per-function
function range(str) {
  let list = [];
  let arr = str.split(', ').map(sub => sub.split(/[-(..):]/));
  arr.forEach(subArray => {
    if (subArray.length === 1) {
      list.push(correctRange(list[list.length - 1], subArray[0]));
    } else {
      let newSub = [];
      subArray.forEach(numStr => {
        let number1 = newSub[newSub.length - 1] || list[list.length - 1]
        let number2 = numStr;
        newSub.push(correctRange(number1, number2));
      });
      for (let start = Number(newSub[0]); start <= Number(newSub[newSub.length - 1]); start += 1) {
        list.push(String(start));
      }
    }
  });
  return list;
}

function correctRange(num1, num2) {
  if (num1 === undefined) {
    return num2;
  } else if (Number(num1.slice(-num2.length)) < Number(num2)) {
    return num1.slice(0, num1.length - num2.length) + num2;
  } else {
    let missingDigit = num1.slice(0, num1.length - num2.length);
    return String(Number(missingDigit) + 1) + num2;
  }
}

console.log(range("1, 3, 7, 2, 4, 1"));  // [ 1, 3, 7, 12, 14, 21]
console.log(range("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(range("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(range("104-2")); // [104, 105, 106, 107, 108, 109, 110, 111, 112]
console.log(range("104-02")); // [104...202]
console.log(range("545, 64:11")); // [545, 564...611]
console.log(range("0, 0")); // [0, 10]
console.log(range("0..0")); // [0...10]
console.log(range('1..5-2')); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]