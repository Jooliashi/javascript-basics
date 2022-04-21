function buyFruit(arr) {
  let countArr = [];
  arr.forEach(sub => {
    for (let count = 0; count < sub[1]; count += 1) {
      countArr.push(sub[0]);
    }
  });
  return countArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]