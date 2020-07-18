// A statement does not return any value. It is an instruction, an action. Remember conditions with if , loops with while and for — all those are statements, because they just perform actions and control actions, but don't become values.


// Expression returns value
const speech = 'Hello!';
console.log(speech);
// You can use any expression inside { } like toUpperCase(), but can not use any statement like if, for, switch etc.
console.log(`${speech.toUpperCase()}`);