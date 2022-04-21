function random(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }
  
  return min + Math.floor(Math.random * (max - min + 1));
}

