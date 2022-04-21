function slice(arr, begin, end) {
  if (begin > arr.length) {
    begin = arr.length;
  }

  if (end > arr.length) {
    end = arr.length;
  }

  let new_arr = [];

  for (let i = begin; i < end; i++) {
    new_arr.push(arr[i]);
  }

  return new_arr;
}

// function splice(array, start, deleteCount, ...elements) {
//   if (start > array.length) {
//     start = array.length;
//   }

//   if (deleteCount > array.length - start) {
//     deleteCount = array.length - start;
//   }
  
//   let result = [];

//   for (let i = 0; i < deleteCount; i++) {
//     result.push(array[start + i]);
//     array[i + start] = array[i + start + deleteCount];
//   }

//   array.length = array.length - deleteCount;

//   let temp = [];
//   for (let i = 0; i < start; i++) {
//     temp.push(array.shift());
//   }

//   for (let i = elements.length - 1; i >= 0; i--) {
//     array.unshift(elements[i]);
//   }
  
//   for (let i = temp.length - 1; i >= 0; i--) {
//     array.unshift(temp[i]);
//   }

//   return result;
// }

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i]
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start +elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
arr4;                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]