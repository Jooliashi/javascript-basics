
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}
console.log(a);
testScope();
console.log(a);
