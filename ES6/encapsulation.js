class Tiger {
    #speed = 100;
    constructor(name) {
        this.name = name;
        // this.#speed = 190; // When Lion renamed
    }
    run() {
        console.log(`I am ${tis.name}. I am running at ${this.#speed} mph`);
    }
}

const royalBengalTiger = new Tiger('Royal Bengal Tiger');

console.log(royal.#speed); // Error for private
royal.#speed = 250; // Error for pravate access

royal.run(); // I am Royal Bengal Tiger. I am running at 100 mph

royal.name = 'Lion';
royal.run(); // I am Lion. I am running at 190 mph



// Another example of encapsulation (declare private data in JavaScript.) ==============================
// Using Closure
const createCounter = () => {
    // A variable defined in a factory or constructor function scope
    // is private to that function.
    let count = 0;
    return ({
        // Any other functions defined in the same scope are privileged:
        // These both have access to the private `count` variable
        // defined anywhere in their scope chain (containing function
        // scopes).
        click: () => count += 1,
        getCount: () => count.toLocaleString()
    });
};

// Lexical environment - a method which has access to the private data
// inside the containing function’s scope
const counter = createCounter();

counter.click();
counter.click();
counter.click();

console.log(counter.getCount()); // 3


// Using Private Fields
class Counter {
    #count = 0

    click() {
        this.#count += 1;
    }
    getCount() {
        return this.#count.toLocaleString()
    }
}
const myCounter = new Counter();

// There is no access directly private data 
myCounter.#count = 100; // Error
console.log(myCounter.#count); // Error

// But accessible in click() and getCount() method
myCounter.click();
myCounter.click();
myCounter.click();

console.log(
    myCounter.getCount()
); // 3

