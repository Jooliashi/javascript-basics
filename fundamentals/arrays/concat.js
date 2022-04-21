function concat(array1, secondArg, ...otherArgs) {
  let new_array = array1.slice();
  if (Array.isArray(secondArg) === true) {
    for (let i = 0; i < secondArg.length; i++) {
      new_array.push(secondArg[i]);
    }
  } else {
    new_array.push(secondArg);
  }
  if (otherArgs.length === 0) {
    return new_array;
  } else if (otherArgs.length === 1) {
    return concat(new_array, otherArgs[0]);
  } else {
    let newSecondArg = otherArgs.shift();
    return concat(new_array, newSecondArg, otherArgs);
  }
}
console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]        