function oddLengths(arr) {
  lengths = arr.reduce((new_arr, ele) => {
    new_arr.push(ele.length);
    return new_arr
  }, [])

  return lengths.reduce((filtered, ele) => {
    if (ele % 2 !== 0) {
      filtered.push(ele);
      return filtered;
    } else return filtered}, []);
};

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab']
console.log(oddLengths(arr));
