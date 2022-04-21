function evenOrOdd(int) {
  if (!Number.isInteger(int)) return console.log('input is wrong'); 
  if (int % 2 === 0) {
    console.log(`${int} is even`)
  } else {
    console.log(`${int} is odd`)
  }
}

evenOrOdd(2);
evenOrOdd('hi');
  
