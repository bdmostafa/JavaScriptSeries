// simple arguments pass
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sum(2, 4, 6));

// The arguments object - arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

function sumArgs() {
    console.log(arguments);
    // total = 0
    // Arguments can not use array helper method like reduce, filter etc. but for of loops
    // for (let num of arguments) {
    //     total += num
    // }

    // Converting arguments to real array so that reduce or another array helper method can be used
    const arrArgs = Array.from(arguments);

    // Or using spread operator
    // const arrArgs = [...arguments];

    console.log(arrArgs); // [ 5, 7, 9 ]

    const total = arrArgs.reduce((a, b) => a + b)

    return total;
}
console.log(sumArgs(5, 7, 9)); // 21