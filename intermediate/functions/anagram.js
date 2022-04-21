function anagram(word, list) {
  return list.filter(ele => {
    return word.split('').sort().join() === ele.split('').sort().join();
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]