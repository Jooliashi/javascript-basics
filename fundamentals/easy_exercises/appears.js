// rlSync = require('readline-sync');
// let list = [];
// let num1 = rlSync.question("Enter the 1st number: ");

// let num2 = rlSync.question("Enter the 2nd number: ");
// let num3 = rlSync.question("Enter the 3rd number: ");
// let num4 = rlSync.question("Enter the 4th number: ");
// let num5 = rlSync.question("Enter the 5th number: ");
// list.push(num1);
// list.push(num2);
// list.push(num3);
// list.push(num4);
// list.push(num5);

// let num6 = rlSync.question("Enter the last number: ");
// let appearence = list.includes(num6) ? "appears" : "does not appear";

// console.log(`The number ${num6} ${appearence} in ${list}`);

function isIncluded(arr, val) {
  return arr.some( ele => {
    ele > val;
  })
}

console.log(isIncluded([1,2,3], 5))

