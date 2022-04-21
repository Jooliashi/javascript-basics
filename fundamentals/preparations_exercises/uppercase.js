function upper(str) {
  if (str.length <= 10) {
    return str;
  } else {
    return str.toUpperCase();
  }
}

console.log(upper('goodbye'));
console.log(upper('hello world'));
