// Default parameter / default function arguments

// default parameter with false indicator before ES6
const minus = (num1, num2) => {
    // Here || indicates false that means if num2's value is not given, 0 is counted
    num2 = num2 || 0;
    return num1 - num2;
}
console.log(minus(10)); // 10
console.log(minus(10, 10)); // 0

// Function statement
function multiply(num1 = 0, num2 = 2) {
    return num1 * num2;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(2)); // 4
console.log(multiply(undefined, 3)); // 0
console.log(multiply(2, undefined)); // 4

// Function expression
const add = function (num1 = 0, num2 = 2) {
    return num1 + num2;
}
console.log(add(undefined, 1)); // 1
console.log(add(1)); // 3

// NaN because not to compute with undefined (undefined + 2) = NaN
const add2 = function (num1, num2 = 2) {
    return num1 + num2;
}
console.log(add2(undefined, 1)); // NaN