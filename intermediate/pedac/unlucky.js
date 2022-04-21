function fridayThe13ths(year) {
  let start = new Date(`${year}-01-13`);
  let curentYear = start.getFullYear();
  let count = 0;
  while (start.getFullYear() === curentYear) {
    if (start.getDay() === 5) {
      count += 1;
    }
    start.setMonth(start.getMonth() + 1);
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
