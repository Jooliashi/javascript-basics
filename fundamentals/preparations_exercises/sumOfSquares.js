function sumOfSquares(arr) {
  return arr.reduce((sum, ele) => sum + ele ** 2, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));
