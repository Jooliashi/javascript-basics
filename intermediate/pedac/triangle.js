function triangle(side1, side2, side3) {
  let sorted = [side1, side2, side3].sort((a, b) => a - b);
  if (sorted.every(side => side > 0) === false) {
    return 'invalid';
  } else if (sorted[1] + sorted[0] < sorted[2]) {
    return 'invalid';
  } else if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene'
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"