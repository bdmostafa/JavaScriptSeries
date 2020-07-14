// factorial with for loop
function showFactorial(n) {
    // For multiplication, initial value must 1
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
}
showFactorial(171)

// factorial with while loop
function showFactorialWithWhile(n) {
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial = factorial * i;
        console.log(i, factorial);
        i++
    }
}
showFactorialWithWhile(10)