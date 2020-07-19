// Array helper method - map, filter, find, every, some, reduce
/* Properties (map) ==========
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


// Array Filter ===================================
/* Properties (filter) ==========
    1. Works like regular looping
    2. works with array
    3. return a new array (based on some condition)
    4. does not change the original array
*/

// if 'el.length > 3' is true, execute 'el'
// const filteredArr = arrMain.filter((el) => el.length > 3 && el)


// Without '&& el', also it runs
const filteredArr = arrMain.filter((el) => el.length > 3)


console.log(filteredArr); // [ 'Programming', 'Life' ]


// Array Find ===================================
/* Properties (filter) ==========
    1. Works like regular looping
    2. works with array
    3. return a single 1st value (based on some condition)
    4. does not change the original array
*/

const findArr = arrMain.find((el) => el.length > 1 && el)

console.log(findArr); // Programming