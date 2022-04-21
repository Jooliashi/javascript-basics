function trim(str) {
  let beginning = 0;
  for(let start = 0; start <= str.length - 1; start++) {
    if (str[start] !== ' ') {
      beginning = start;
      break;
    }
  }

  let ending = str.length - 1;
  for (let end = str.length - 1; end >= 0; end--) {
    if (str[end] !== ' ') {
      ending = end;
      break
    }
  }
  
  let new_str = '';
  for (let start = beginning; start <= ending; start++) {
    new_str += str[start];
  }
  console.log(new_str);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""