const arr = ['Programing', 'is', 'life.'];

console.log(arr.length); // 3

console.log(arr[1]); // is

// Adding/removing element at the end of the array
console.log(arr.push('Lets go')); // 4
console.log(arr.pop()); // Lets go

console.log(arr);
// [ 'Programing', 'is' ] 

// Adding/removing element at the beginning
console.log(arr.unshift('My'));
console.log(arr);
console.log(arr.shift())
console.log(arr);

// Accessing specific part of array but not changing in the array
console.log(arr.slice(0, 2));
console.log(arr);

// Removing specific part of the array
console.log(arr.splice(0, 2)); // [ 'Programing', 'is' ] 
console.log(arr); // [ 'life.' ]

console.log(arr.unshift('is'));
console.log(arr.unshift('Programing'));
console.log(arr);

// Concat (it can not change in the main array)
console.log(arr.concat(['Lets go!']));
console.log(arr);

// emptying array
arr.length = 0;
console.log(arr);