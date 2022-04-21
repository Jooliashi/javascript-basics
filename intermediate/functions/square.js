function totalArea(arr) {
  return arr.reduce((total, subarr) => {
    return total + (subarr[0] * subarr[1]);
  }, 0 );
}

function totalSquareArea(arr) {
  return arr.filter(ele => ele[0] === ele[1]).map(ele => ele[0] * ele[1]).reduce((sum, ele) => sum + ele);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121