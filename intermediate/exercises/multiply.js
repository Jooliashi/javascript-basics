function multiplyAllPairs(arr1, arr2) {
  newArr = [];
  arr1.forEach(ele1 => {
    arr2.forEach(ele2 => {
      newArr.push(ele1 * ele2);
    });
  });
  return newArr.sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]