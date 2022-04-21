// function splice(arr, startIndex, num) {
//   let newArr = [];
//   let leftOverArr = [];
//   let count = 0;

//   for (let count = 0; count < num; count++) {
//     push(newArr, arr[startIndex + count]);
//   }

//   if (startIndex > 0) {
//     for (let i = 0; i < startIndex; i++) {
//       leftOverArr[count] = arr[i];
//       count += 1;
//     }
//   }

//   if (num + startIndex < arr.length) {
//     for (let i = num + startIndex; i < arr.length ; i++) {
//       leftOverArr[count] = arr[i];
//       count += 1
//     }
//   }

//   for (let i = 0; i < leftOverArr.length; i++) {
//     arr[i] = leftOverArr[i];
//   }
//   arr.length = leftOverArr.length;
  
//   return newArr;

// }

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index])
    }
    
    array[index] = array[index + number]
  }
  array.length = array.length - removedValues.length;
  return removedValues;
}

function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count);