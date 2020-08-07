// Generator function
function* allDataGenerate() {
    yield 'javascript';
    yield 'python';
    yield 'c++'
}

const myData = allDataGenerate();

// Generate body will get executed only when the iterator’s next() method is called
console.log(myData.next());
// { value: 'javascript', done: false } 
console.log(myData.next());
// { value: 'python', done: false } 
console.log(myData.next());
// { value: 'c++', done: false } 
console.log(myData.next());
// { value: 'undefined', done: true }



// ANother example =================
function* generator(i) {
    yield i;
    yield i + 1;
}
let gen = generator(1);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2




// To finish the execution of the generator function, we can use the RETURN statement =================
function* generatorFunction() {
    let index = 0;
    while (true) {
        yield index++;
        if (index > 2) return;
    }
}
let genForReturn = generatorFunction();
console.log(genForReturn.next()); // { value: 0, done: false }
console.log(genForReturn.next()); // { value: 1, done: false }
console.log(genForReturn.next()); // { value: 2, done: false }
console.log(genForReturn.next()); // { value: undefined, done: true }
// Once generator is finished, we will not be able to execute any of the generator’s code using subsequent next() calls. They will just return an object of this form: {value: undefined, done: true}




// Passing arguments into Generators ==================================
function* logGenerator(i) {
    while (i < 3) {
        console.log(i++, yield);
    }
}
let genByArguments = logGenerator(0);
// the first call of next executes from the start of the function until the first yield statement
genByArguments.next();
genByArguments.next('Logging Starts...'); // 0 'Logging Starts...' 
genByArguments.next('Logging Going On...'); // 1 Logging Going On...
genByArguments.next('Logging Ends...'); // 2 Logging Ends...




// Using yield* ================================================
function* anotherGenerator(i) {
    yield i + 10;
    yield i + 20;
    yield i + 30;
}

function* functionGenerator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 1;
}

let genYield = functionGenerator(1);
console.log(genYield.next()); // { value: 1, done: false }
console.log(genYield.next()); // { value: 11, done: false }
console.log(genYield.next()); // { value: 21, done: false }
console.log(genYield.next()); // { value: 31, done: false }
console.log(genYield.next()); // { value: 2, done: false }



// In practice ===========================
function myAjax(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => dataGenerate.next(data))
}

function* placeHolderData() {
    const post = yield myAjax('https://jsonplaceholder.typicode.com/posts/1');
    console.log(post);
    const comments = yield myAjax('https://jsonplaceholder.typicode.com/posts/1/comments');
    console.log(comments);
}

const dataGenerate = placeHolderData();

dataGenerate.next();