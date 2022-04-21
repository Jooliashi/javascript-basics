function allMatches(arr, pattern) {
  return arr.reduce((new_arr, ele) => {
    if (pattern.test(ele)) { new_arr.push(ele) }
    return new_arr}, [] )
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
