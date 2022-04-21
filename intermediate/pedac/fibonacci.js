const series = [1, 1];
function fibonacci(num) {
  if (num <= series.length) {
    return series[num];
  } else {
    while (series.length < num) {
      series.push(series[series.length - 1] + series[series.length - 2])
    }
    return series[num - 1];
  }
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050