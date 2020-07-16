/* Spread Operator is unpacking collected elements such as arrays into single elements
Spread usages on array and object for copying part of the arr and obj
*/

// Spread on array ===================================================
const arrOne = ['I', 'love', 'Bangladesh']
const arrTwo = ['Dhaka', 'is', 'a', 'capital', 'of', 'BD']

// const arrThree = arrOne.concat(arrTwo);

// Use ... spread operator to flat the array [[ , , ], [ , , ]] ===> [, , , , ]
const arrThree = [...arrOne, 'and', ...arrTwo]
console.log(arrThree);

// Spread on object =========================================
const person = {
    name: 'Mostafa',
    age: 30,
    gender: 'male',
    status: 'developer'
}

const updatePerson = {
    // person,
    // spread to flat the object { { }, { }} ===> { }
    ...person,
    degree: 'MSC'
}

console.log(updatePerson)