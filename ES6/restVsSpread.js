// Note: Spread Operator is unpacking collected elements such as arrays into single elements. But Rest Operator is collecting all remaining elements into an array or object

// Spread on array ===================================================
const arrOne = ['I', 'love', 'Programming']
const arrTwo = ['Programming', 'is', 'life']

const arr3 = [arrOne, arrTwo];
console.log(arr3);
// [ [ 'I', 'love', 'Programming' ], ['Programming', 'is', 'life']]

// Use ... spread operator to unpack the array [[ , , ], [ , , ]] ===> [, , , , ]
const arrThree = [...arrOne, 'and', ...arrTwo]
console.log(arrThree);
// [ 'I', 'love', 'Programming', 'Programming', 'is', 'life']

// Rest on array ==========================================
const [idx1, ...restArrValue] = arrOne;
console.log(idx1, restArrValue);
// I [ 'love', 'Programming' ]

// Again spread for unpacking
console.log(idx1, ...restArrValue);
// I love Programming

// Spread on object =========================================
const person = {
    name: 'Mostafa',
    age: 30,
    gender: 'male',
    status: 'developer'
}

// const {
//     name,
//     age,
//     gender,
//     status
// } = person;

// console.log(name);

const updatePerson = {
    // spread for unpacking the object { { }, { }} ===> { }
    ...person,
    degree: 'MSC'
}

console.log(updatePerson);
// { name: 'Mostafa', age: 30, gender: 'male', status: 'developer', degree: 'MSC' }

// Rest on object ==================================
const {
    name,
    ...restObjValue
} = updatePerson;
console.log(name, restObjValue);
// Mostafa { age: 30, gender: 'male', status: 'developer' }

// Again spread for unpacking (to be solved later)
// console.log(name, ...restObjValue);
console.log(...name);
// M o s t a f a

// Another example of both
const showBio = (name, age, ...values) => { // Rest operator
    return {
        Name: name,
        Age: age,
        rest: [...values, 'Marketer', 'Designer'] // Spread operator
    }
};

console.log(showBio('Mostafa', 29, 'Web Developer', 'Programmer'));