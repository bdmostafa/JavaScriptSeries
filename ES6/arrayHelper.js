// Map - Iterate each numbers, return a new array not changing the original array
const marks = [90, 55, 79, 88, 49];

const addBonusTenPercent = marks.map(mark => mark + mark * 0.1);
console.log(addBonusTenPercent); // [ 99, 60.5, 86.9, 96.8, 53.9 ] 
console.log(marks); // [ 90, 55, 79, 88, 49 ]


// Foreach - Iterate each numbers, does not return an array itself and does not change the main array
let attendanceMarks = [];
const addAttendanceMarks = marks.forEach(mark => attendanceMarks.push(mark + 5))
console.log(addAttendanceMarks); // undefined
console.log(attendanceMarks); // [ 95, 60, 84, 93, 54 ] 
console.log(marks); // [ 90, 55, 79, 88, 49 ]


// Find - return one first element from the array on condition
const findAPlus = marks.find(mark => mark >= 90);
console.log(findAPlus); // 90

// FindIndex - return index number
const findIndex = marks.findIndex(mark => mark >= 90);
console.log(findIndex); // 0

// Every - return true or false having all the elements in the array according to the condition
const isAllPassed = marks.every(mark => mark > 40)
console.log(isAllPassed); // true

// Some - return true or false having any one element in the array on condition
const isAnyoneFailed = marks.some(mark => mark < 40);
console.log(isAnyoneFailed); // false

// Filter - return a new array on condition
const whoPassed = marks.filter(mark => mark > 40);
console.log(whoPassed); // [ 90, 55, 79, 88, 49 ] 

// Reduce - include multiple numbers on condition and return the result on condition, not am array
const addMarks = marks.reduce((accumulator, currentValue) => {
    return sum = accumulator + currentValue;
}, 0)

console.log(addMarks); // 361

const avgMarks = marks.reduce((a, b) => (a + b)) / marks.length;

console.log(avgMarks); // 72.2

// Reduce on array object
const arrScore = [{
        "name": "Mostafa",
        "score": "90.2"
    },
    {
        "name": "Mostafa",
        "score": "55.5"
    },
    {
        "name": "Mostafa",
        "score": "88.79"
    },
    {
        "name": "Mostafa",
        "score": "49.25"
    },
    {
        "name": "Mahmud",
        "score": "79.49"
    }
];

let count = 0;
const avgScore = arrScore.reduce(function (sum, person) {
    if (person.name === "Mostafa") {
        count++;
        return sum + parseFloat(person.score);
    }
    return sum;
}, 0) / count;
console.log(avgScore); // 70.935