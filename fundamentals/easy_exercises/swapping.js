function swapName(name) {
  let arr = name.split(' ');
  return arr[1] + ', ' + arr[0];
}

console.log(swapName('Joe Roberts'));