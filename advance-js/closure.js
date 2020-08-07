/* Closure - A feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain
 */
let myName = "Mostafa";

function printName() {
    console.log(myName);
}

printName(); //Mostafa

myName = "Mahmud";
printName(); // Mahmud

// Closure - Example 1
function outer() {
    const name = "Javascript Closures";

    function inner() {
        console.log(name);
    }
    return inner;
}

//outer() invoked the first time to store the data in myFunction
let myFunction = outer();
// Executes myFunction
myFunction(); // Javascript Closures




// CLosure - Example 2
function outerFunc(outerVar) {
    const hi = "Hi";

    return function innerFunc(innerVar) {
        console.log(hi);
        console.log("Outer Variable: " + outerVar);
        console.log("Inner Variable: " + innerVar);
    };
}

const newFunc = outerFunc("Outside");
newFunc();
/*
Hi
Outer Variable: Outside
Inner Variable: undefined =====
*/

newFunc("Inner");
/*
Hi
Outer Variable: Outside
Inner Variable: Inner =====
*/




// Closure - Example 3
function add() {
    let counter = 5;

    function plus() {
        counter++;
    }
    plus();
    return counter;
}
console.log(add()); // 6




// Closure - Example 4 (Self-invoking-IFEE)
var add = (function () {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3



// Closure - Example 5 (Calling function as different variables and performance like IFEE)
const stopWatch = () => {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1()); // 1
console.log(clock1()); // 2
console.log(clock1()); // 3

const clock2 = stopWatch();
console.log(clock2()); // 1

console.log(clock1()); // 4

console.log(clock2()); // 2


// Closure - Example 6 (IFEE - Self-invoking and returning multiple functions)
// Here counter is an object
let counter = (function () {
    let counterValue = 0;
    // Private method
    function changeBy(value) {
        counterValue += value;
    }
    return {
        // Public method
        // Returning functions as property
        increase: () => {
            changeBy(1);
            // return counterValue;
        },
        decrease: () => {
            changeBy(-1);
        },
        value: () => {
            return counterValue;
        },
    };
})();

console.log(counter.value()); // 0
console.log(counter.increase()); // undefined
// returns undefined as increase function has no return itself

console.log(typeof (counter.increase)); // function

counter.increase();
console.log(counter.value()); // 2
counter.increase();
console.log(counter.value()); // 3

counter.decrease();
console.log(counter.value()); // 2
counter.decrease();
console.log(counter.value()); // 2