function multiplyList(arr1, arr2) {
  return arr1.map((ele, idx) => ele * arr2[idx]);
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]