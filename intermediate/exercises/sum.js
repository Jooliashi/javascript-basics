function sum(num) {
  return String(num).split('').map(ele => Number(ele)).reduce((sum, ele) => sum + ele);
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45