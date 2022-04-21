/*
input: an odd integer that is bigger or equal to 7
output: return undefined but console.log the result string
rules:
  num of lines of stars equal to integer
  middle lane has integer num of stars
  outer lanes are always 3 stars
  space between outer lane stars are determined by its distance to
    the middle lane
  space in front of outer lane stars are
    (integer - 3 - inbetween spaces) / 2
  upperpart and lowerpart is symmetrical
test cases:
  star(7) // '*  *  *\n * * *\n  ***\n*******\n  ***\n * * *\n*  *  *'
data type:
  string, array
algo:
  declare the middle lane with number of stars equal to integer
  declare an bottom array as empty
  declare num of line for bottom part as distance - 1 then divided by 2
  loop through 0 to num - 1
    get star front space as (integer - 3 - n* 2) / 2
    so the total line should be front space + * + distance + * + distance
                                +*
    save the line as a string to empty array
  save bottom part array reversed as top array
  join top array with \n and bottom array the same
  total result = top + middle + bottom string
  console log it
*/

function star(int) {
  let middle = '\n' + repeatString('*', int) + '\n';

  let bottom = [];
  let num = (int - 1) / 2;
  for (let distance = 0; distance < num; distance += 1) {
    let inbetween = repeatString(' ', distance)
    let frontSpace = repeatString(' ', (int - 3 - 2 * distance) / 2);
    let line = frontSpace + '*' + inbetween + '*' + inbetween + '*';
    bottom.push(line);
  }
  let top = reverseWithoutMutating(bottom);
  let result = top.join('\n') + middle + bottom.join('\n');
  console.log(result);
}

function reverseWithoutMutating(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function repeatString(str, num) {
  let result = '';
  for (let i = 0; i < num; i += 1) {
    result += str;
  }
  return result;
}

star(7);
star(9)