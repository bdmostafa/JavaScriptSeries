const txt = "     Programming is my crush.  ";

// Find length
console.log(txt.length); // 31

// Find character/element
console.log(txt[5]); // P

// Find craracter by index
console.log(txt.charAt(5)); // P

// Find index by character
console.log(txt.indexOf('P')); // 5

// If same character more than one, 1st character counted
console.log(txt.indexOf('m')); // 11

// Uppercase
console.log(txt.toUpperCase()); // PROGRAMMING IS MY CRUSH.

// Lowercase
console.log(txt.toLowerCase()); // programming is my crush.

// Check if a text is included or not
console.log(txt.includes('S')); // false

// Remove space
console.log(txt.trimStart());
console.log(txt.trimStart().length); // 26

console.log(txt.trimEnd());
console.log(txt.trimEnd().length); // 29

console.log(txt.trim());
console.log(txt.trim().length); // 24

// Keep part of the text but not remove from the main text
// slice from 5th index to before 9th
console.log(txt.slice(5, 9)); // Prog
console.log(txt.slice(9, 17)); // ramming

// substr from 5th index to next 9 length
console.log(txt.substr(5, 9)); // Programmi

// Concat method
console.log(txt.concat('!'));

// Converting array from a string
console.log(txt.split(' '));