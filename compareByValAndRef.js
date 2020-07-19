// compare by value in all 6 primitives such as string, number, bigint, boolean, undefined, and symbol.
const a = 1;
const b = 1;
const c = 2;
const d = 3;
console.log(a === b); // true
console.log(c !== d); // true


// compare by reference in complex data type/ object data type/ reference data type (memory location)
const aArray = [1, 2, 3];
const bArray = [1, 2, 3];
console.log(aArray === bArray); // false

const aObject = {
    a: 1,
    b: 2
}
const bObject = {
    a: 1,
    b: 2
}

console.log(aObject === bObject); // false

// compare by primitive, not reference
console.log(aObject.a === bObject.a); // true
console.log(aArray[0] === bArray[0]); // true

console.log(aArray.a === bArray.a); // true (because of undefined)
console.log(aArray.a === bArray.b); // true (because of undefined)