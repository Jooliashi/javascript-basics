function sumSquareDifference(num) {
  let arr = [];
  for (let i = 1; i <= num; i += 1) {
    arr.push(i);
  }

  let squareOfSum = arr.reduce((sum, ele) => sum + ele) ** 2;
  let sumOfSquare = arr.map(ele => ele ** 2).reduce((sum, ele) => sum + ele);
  return squareOfSum - sumOfSquare;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150