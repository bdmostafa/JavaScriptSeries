function showFibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
        // console.log(fibo[i - 1], fibo[i - 2], fibo[i]);
    }
    return fibo;

}
let result = showFibonacci(10);
console.log(result);

// Fibonacci Recursive
function fiboRecursive(n) {
    // Stopping condition
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fiboRecursive(n - 1) + fiboRecursive(n - 2);
    }
}

const fiboResult = fiboRecursive(15);
console.log(fiboResult);

// Fibonacci Series in recursive
function fiboSeries(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        let series = fiboSeries(n - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
}
const seriesResult = fiboSeries(10);
console.log(seriesResult);