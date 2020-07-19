// A statement does not return any value. It is an instruction, an action. Remember conditions with if , loops with while and for — all those are statements, because they just perform actions and control actions, but don't become values.

const speech = 'Hello!';

/*
console.log(const a); // error!

let b =
    if (x > 10) {
        return 100;
    }; // error!
 */

// Expression returns value
console.log(speech);

// You can use any expression inside { } like toUpperCase() or any function() because this function will return something, but You can not put statements like if, for, switch etc. where expressions are expected

console.log(`${speech.toUpperCase()}`);
console.log(10 * Math.random());

// Another example
const statement = function () {
    return 'This is statement, not expression';
}
console.log(statement());

// (function () {...}()) or (function () {...})()
const expression = (function () {
    return 'This is expression because this function is called itself and returns value';
}())
console.log(expression);