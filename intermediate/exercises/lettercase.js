function letterCaseCount(str) {
  return str.split('').reduce((count, char) => {
    if (char.match(/[A-Z]/)) {
      count.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
    return count;
  }, { lowercase: 0, uppercase: 0, neither: 0,});
}

/*
lowerArray = string.match(/[a-z]/g) || []
upperArray = string.match(/[A-Z]/g) || []
neitherArray = string.match(/[^a-z]/gi) || []
*/
console.log(letterCaseCount('abCdef 123'));;  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));;    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));;         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));;            // { lowercase: 0, uppercase: 0, neither: 0 }