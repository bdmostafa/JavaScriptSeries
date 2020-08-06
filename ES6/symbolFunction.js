/*
Symbols are new primitive type introduced in ES6.Symbols are completely unique identifiers.Just like their primitive counterparts(Number, String, Boolean), they can be created using the factory
function Symbol() which returns a Symbol.
*/

const demo1 = Symbol(1);
const demo2 = Symbol(1);

console.log(demo1 === demo2); // false - It creates an unique value

// In practice =================
const studentInfo = {
    // 'Mostafa': {name: 'Mostafa', id: 3},
    // 'Mahmud': {name: 'Mahmud', id: 5},
    // 'Mostafa': {name: 'Mostafa', id: 1}
    [Symbol('Mostafa')]: {
        name: 'Mostafa',
        id: 3
    },
    [Symbol('Mahmud')]: {
        name: 'Mahmud',
        id: 5
    },
    [Symbol('Mostafa')]: {
        name: 'Mostafa',
        id: 1
    }
}

// data access from symbol
// getOwnPropertySymbols returns an array of all symbol properties found directly upon a given object
const getInfo = Object.getOwnPropertySymbols(studentInfo);

// Using map
const data = getInfo.map(data => studentInfo[data]);

console.log(data);
console.log(data[0], data[2]);
console.log(data[1].name);

// Using for of
for (const data of getInfo) {
    console.log(studentInfo[data]);
    console.log(studentInfo[data].name);
    console.log(studentInfo[data].id);
}