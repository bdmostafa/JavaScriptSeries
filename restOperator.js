// Rest Parameter is collecting all remaining elements into an array or object
const arrOne = ['I', 'love', 'Bangladesh']
const myName = ['Mostafa', 'Mahmud', 'Mamun']

console.log(arrOne[0]);
console.log(arrOne[1]);
console.log(arrOne[2]);

// array destructuring
const [idx1, idx2, idx3] = arrOne;
console.log(idx1, idx2, idx3);
// I love Bangladesh

// array destructuring and rest operator
const [index1, ...restArrValue] = arrOne;
console.log(index1, restArrValue);
// I [ 'love', 'Bangladesh' ]

const [firstName, ...familyName] = myName;
console.log(firstName);
console.log(familyName);

// obj destructuring and rest operator
const person = {
    name: 'Mostafa',
    age: 30,
    gender: 'male',
    status: 'developer'
}

const {
    name,
    ...restObjValue
} = person;
console.log(name, restObjValue);
// Mostafa { age: 30, gender: 'male', status: 'developer' } 