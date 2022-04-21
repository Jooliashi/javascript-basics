function countOccurrences(things) {
  let count = {};
  things.forEach(ele => {
    count[ele] ||= 0;
    count[ele] += 1; 
  });
  for (let i in count) {
    console.log(`${i} => ${count[i]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);