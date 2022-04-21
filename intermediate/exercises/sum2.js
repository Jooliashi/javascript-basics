function sumOfSums(arr) {
  let total = 0;
  let last = arr.reduce((sum, ele) => {
    total += sum;
    return sum + ele;
  });
  return total + last;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*
function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                                             .reduce((sum, value) => sum + value);
}
*/