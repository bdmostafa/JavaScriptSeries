/*
localStorage is similar to sessionStorage, except that
while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends— that is, when the page is closed.
 */

// localStorage can only save string type of data
// localStorage.setItem('fullName', 'Mostafa Al Mahmud')

const profile = {
    fullName: 'Mostafa',
    age: 29,
    profession: 'web developer'
};

localStorage.setItem('name', profile) // It can be saved as an object
console.log(typeof profile); // object
console.log(typeof localStorage.getItem('name')); // string

// JSON - JavaScript Object Notation
// To convert object to a string, use JSON
const jsonData = JSON.stringify(profile);
localStorage.setItem('name', jsonData);
console.log(typeof jsonData); // string

console.log(typeof localStorage.getItem('name')); // string

// Again to convert string into an object to pass the data
const jsonParsed = JSON.parse(localStorage.getItem('name'));
console.log(jsonParsed);
// {fullName: "Mostafa", age: 29, profession: "web developer"}
console.log(jsonParsed.fullName); // Mostafa
console.log(typeof jsonParsed);
// object