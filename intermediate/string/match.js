function isBalanced(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      count += 1;
    } else if (str[i] === ')') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false