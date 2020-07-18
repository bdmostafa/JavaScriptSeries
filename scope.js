// {local scope} - scope chain (check low to high) -> functional scope, block scope - only accessible within the function and child function
// global scope { ... } - variable assign globally
let a = 3;

// b and c are n/A outside of function (local scope)
// console.log(b);
// console.log(c);

function outerFunction() {
    console.log(a); // 3, 9
    let b = 5;
    a = 9;
    console.log(b); // 5, 5
    // console.log(c); (n/A)
    return function innerFunction() {
        const b = 10
        let c = 7;
        console.log(a); // 9
        console.log(b); // 10
        console.log(c); // 7
    }
}

{
    // block scope
    const a = 11;
    const b = 13
    console.log(a); // 11
    console.log(b); // 13
}

console.log(a); // 3
// console.log(b); (n/A)


// call outerFunction
outerFunction();
// call outerFunction and innerFunction
outerFunction()();