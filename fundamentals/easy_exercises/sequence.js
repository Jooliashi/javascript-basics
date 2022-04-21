function sequence(count, start) {
  let multiple = 1;
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(start * multiple);
    multiple += 1;
  }

  return arr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []