function triangle(angle1, angle2, angle3) {
  if (isValid([angle1, angle2, angle3])) {
    return type([angle1, angle2, angle3]);
  } else {
    return 'invalid';
  }
}

function isValid(arr) {
  return arr.every(angle => angle > 0) &&
  (arr.reduce((sum, angle) => sum + angle) === 180);
}

function type(arr) {
  arr.sort((a, b) => a - b);
  if (arr.indexOf(90) !== -1) {
    return 'Right';
  } else if (arr[2] > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"