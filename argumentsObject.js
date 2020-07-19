// simple arguments pass
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(sum(2, 4, 6));

// The arguments object - arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

function sumArgs() {
    console.log(arguments);
    // let total = 0
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

// Alternative way to use argument object by using REST operator
function sumArgsByRest(num1, ...restVal) {
    console.log(...restVal); // 20 30
    console.log(restVal); // [20, 30]

    return restVal.reduce((acc, curr) => {
        return acc + curr;
    }, num1);
}
console.log(sumArgsByRest(10, 20, 30)); // 60

// Or using just rest parameter
function sumByRestOnly(...restVal) {
    return restVal.reduce((acc, curr) => acc + curr);
}

console.log(sumByRestOnly(10, 20, 30)); // 60