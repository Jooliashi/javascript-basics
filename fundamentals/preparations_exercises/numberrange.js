function numberRange(int) {
  if (int <= 50 && int > 0) {
    console.log('The number is between 0 and 50');
  } else if (int  > 51 && int <= 100) {
    console.log('The number is between 51 and 100');
  } else if (int < 0) {
    console.log('The number is small than 0')
  } else console.log('The number is bigger than 100');
}
  numberRange(25);
  numberRange(75);
  numberRange(125);
  numberRange(-25);
