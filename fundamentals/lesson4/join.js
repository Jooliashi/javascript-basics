function join(arr, str) {
  new_str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      new_str += String(arr[i]) + str;
    } else {
      new_str += String(arr[i]);
    }
  }
  return new_str;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));    