function makeDoubler(caller) {
  return (number) => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}

const doubler = makeDoubler('Victor'); 

doubler(5); 