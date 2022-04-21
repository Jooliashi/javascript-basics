/*
input: two strings
output: 1, -1, 0 or null
rules: compare two version strings,
  if either string contains non . or digit return null
  v1 > v2 return 1, v1 < v2 return -1, if === then return 0

test cases:
1 === 1
1.1 > 1.0
2.3.4 < 2.3.5

edge cases:
  validation: input?
  1.a not valid
  .1 and 1. not valid
  1..0 not valid
  
  different length for version number
  1.1.2 1.1
data type:
  string for input
  number and array
  number for output

algorithm:
  verifying the string content
  split both strings according to dot
  compare each element at the same index of the two strings as numbers
  as soon as two elements return other than 0, return the whole method
*/


function compareVersions(version1, version2) {
  if (!version1.match(/^[0-9]+(\.[0-9]+)*$/) || !version2.match(/^[0-9]+(\.[0-9]+)*$/)) {
    return null;
  }

  let elements1 = version1.split('.');
  let elements2 = version2.split('.');
  let maxLength = Math.max(elements1.length, elements2.length)

  for (let i = 0; i < maxLength; i += 1) {
    let currentVersion1 = Number(elements1[i]) || 0;
    let currentVersion2 = Number(elements2[i]) || 0;
    if (currentVersion1 > currentVersion2) {
      return 1;
    }
    else if (currentVersion1 < currentVersion2) {
      return -1;
    }
  }

  return 0;
}

// console.log(compareVersions('1', '1'));            // 0
// console.log(compareVersions('1.1', '1.0'));        // 1
// console.log(compareVersions('2.3.4', '2.3.5'));    // -1
// console.log(compareVersions('1.a', '1'));          // null
// console.log(compareVersions('.1', '1'));           // null
// console.log(compareVersions('1.', '2'));           // null
// console.log(compareVersions('1..0', '2.0'));       // null
// console.log(compareVersions('1.0', '1.0.0'));      // 0
// console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1