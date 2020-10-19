// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// https://momentjs.com/


const date = new Date();

console.log(date);
console.log(date.getDay()); // Weak day 0-6
console.log(date.getDate()); // 0-30
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime()); // since Jan 1 1970
console.log(date.getUTCDay());
console.log(date.getUTCHours());

console.log(Date.now());

const birthdayShams = new Date(2016, 07, 13, 16, 55);
console.log(birthdayShams.getDate());


// Execution time calculation program
const start = new Date();
let sum = 0;

for (let i = 0; i < 10000000; i++) {
    sum++;
}

const end = new Date();

const ms = end - start;
const inSecond = ms / 1000;
console.log('time elapsed: ', inSecond, 'total loop: ', sum);