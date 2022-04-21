function generatePattern(num) {
  let max = '';
  for (let count = 1; count <= num; count++) {
    max += `${count}`
  }
  
  for (let start = 1; start <= num; start++) {
    let str = ''; 
    for (let index = 1; index <= start; index++) {
      str += `${index}`;
    }
    for (let star = str.length + 1; star <= max.length; star++) {
      str += '*';
    }
    console.log(str);
  }
}

generatePattern(20);
