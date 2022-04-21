function swap(str) { 
  let list = str.split(' ');
  return list.map((ele) => {
    if (ele.length <= 1){
      return ele;
    } else if (ele.length === 2){
      return ele[1] + ele[0];
    } else {
      let first = ele[0];
      let last = ele[ele.length - 1];
      return new_str = last + ele.slice(1, ele.length -1) + first;
    }
  }).join(" ");
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"