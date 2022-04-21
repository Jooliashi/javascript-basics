// function union(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!result.includes(arr1[i])) {
//       result.push(arr1[i])
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!result.includes(arr2[i])) {
//       result.push(arr2[i])
//     }
//   }
//   return result;
// }

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value)
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])