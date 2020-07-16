// first-class javascript functions as follows: ==========================================

function funcBasic() {
    console.log('function basic')
}
funcBasic(); // function basic

// function as variable reference =====================================
const func = function () {
    console.log('function in variable')
}
func(); // function in variable

function outerFunc() {
    const funcVar = function () {
        console.log('inner function in variable')
    }
    return funcVar()
}
outerFunc(); // inner function in variable 

// Return as a function itself / function as return result ============================
function outerFunc2() {
    return function innerFunction() {
        console.log('Inner function here')
    }
}
outerFunc2()()
// Inner function here

// Pass function as an argument / function as an input =============================
function outerFunc3(innerFunction) {
    console.log(innerFunction())
}
outerFunc3(function () {
    console.log('innerFunction to be called');
})

// Higher order function and callback function =============
function higherOrderFunc(callbackFunc) {
    console.log(callbackFunc())
}
higherOrderFunc(function () {
    console.log('Callback Function to be called');
})