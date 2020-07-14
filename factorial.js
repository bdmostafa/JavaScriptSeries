function showFactorial(n) {
    // For multiplication, initial value must 1
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
}
showFactorial(171)