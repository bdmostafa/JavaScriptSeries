// factorial with for loop
function showFactorial(n) {
    // For multiplication, initial value must 1
    let factorial = 1;
    if (n === 0) {
        return 1;
    } else {
        for (let i = 1; i <= n; i++) {
            factorial = factorial * i;
            console.log(i, factorial);
        }

        // loop from highest to lowest
        /*
        for (let i = n; i >= 1; i--) {
            factorial = factorial * i;
            console.log(i, factorial);
        }
        */
    }
}
(showFactorial(5));


// // factorial with while loop
// function showFactorialWithWhile(n) {
//     let factorial = 1;

//     if (n === 0) {
//         return 1;
//     } else {
//         let i = 1;
//         while (i <= n) {
//             factorial = factorial * i;
//             console.log(i, factorial);
//             i++;
//         }

//         // loop from highest to lowest
//         /*
//         let i = n;
//         while (i >= 1) {
//             factorial = factorial * i;
//             console.log(i, factorial);
//             i--;
//         }
//         */
//     }

// }
// showFactorialWithWhile(10)

// // factorial with Recursive
// function factorialRecursive(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorialRecursive(n - 1);
//     }
// }

// const result = factorialRecursive(11);
// console.log(result);