// local scope - scope chain (check low to high)
// global scope - variable assign globally
let a = 3;

// b and c are n/A outside of function
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
    const a = 11;
    console.log(a); // 11
}

console.log(a); // 3


// call outerFunction
outerFunction();
// call outerFunction and innerFunction
outerFunction()();