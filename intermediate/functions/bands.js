let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(band => band.country = 'Canada');
  data.forEach(band => {
    band.name = band.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  });
  data.forEach(band => band.name = band.name.replace(/\./g, ''));
  return data;
}

processBands(bands);
console.log(bands);
// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]