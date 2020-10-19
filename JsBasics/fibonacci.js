// [0, 1, 1, 2, 3, 5, 8, 13, 21, ...]
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
/*
[
    0, 1, 1, 2, 3,
    5, 8, 13, 21, 34,
    55
]
*/

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
console.log(fiboResult); // 610

// Fibonacci Series in recursive

function fiboSeriesRecursive(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        // Calculate array nth element
        let fibo = fiboSeriesRecursive(n - 1)
        let nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
console.log(fiboSeriesRecursive(7));
/*
[
    0, 1, 1, 2,
    3, 5, 8, 13
]
*/

function fiboSeries(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        let series = fiboSeries(n - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
}
const seriesResult = fiboSeries(10);
console.log(seriesResult);
/*
[
    0, 1, 1, 2, 3,
    5, 8, 13, 21, 34,
    55
]
*/