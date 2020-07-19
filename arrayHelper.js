// Array helper method - map, filter, find, every, some, reduce
/* Properties ==========
    1. Works like regular looping
    2. works with array
    3. return a new array (modified or not)
    4. does not change the original array
*/

// Array Map ===================================
const arrMain = ['Programming', 'Is', 'Life'];

const mappedArr = arrMain.map((el) => el.toLowerCase())
// if the statement is in single line, no need to use return

console.log(mappedArr);
console.log(arrMain);
// Not changed in the main array

const mappedArray = arrMain.map(el => {
    // if (el === 'Life') {
    //     return el + '!';
    // } else {
    //     return el;
    // }

    // Using ternary operator
    return (el === 'Life') ? el + '!' : el;
})
console.log(mappedArray);

const arrJoin = mappedArray.join(' ');
console.log(arrJoin);

// Different way to solution
const mapArr = (function () {
    const mapArr = arrMain.map(el => el === 'Life' ? el + '!' : el)
    return mapArr.join(' ');
})()
console.log(mapArr);