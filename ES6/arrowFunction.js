// Arrow function is used in only function expression
const add = (num1 = 0, num2 = 2) => {
    return num1 + num2;
}
console.log(add(undefined, 1)); // 1
console.log(add(1)); // 3

// return a single statement, no need to curly braces, {}, and return keyword
const multiply = (num1 = 0, num2 = 2) => num1 * num2;
console.log(multiply(undefined, 1)); // 0
console.log(multiply(1)); // 2

const area = (length, width) => length * width;
console.log(area(5, 3)); // 15

// When a single/only one parameter, no need to use bracket, ()
const modulus = num1 => num1 % 3;
console.log(modulus(1)); // 1
console.log(modulus(3)); // 0

// When there is no parameter, use bracket ()
const selfItem = () => 1;
console.log(selfItem());

// No need to use arrow function in object
const bio = {
    name: 'Mostafa',
    age: 29,
    profession: 'Web Developer',
    showBio: function () {
        console.log(this);
        /* Here this means the full object itself. Output is:
        {
            name: 'Mostafa',
            age: 29,
            profession: 'Web Developer',
            showBio: [λ: showBio]
        }
        */
        return `This is ${this.name} and I am ${this.age}. I am a ${this.profession}.`
    }
}
console.log(bio.showBio());
// This is Mostafa and I am 29. I am a Web Developer.

// But using arrow function in which 'this' keyword is used ======================
const person = {
    name: 'Mostafa',
    age: 29,
    profession: 'Web Developer',
    showBio: () => {
        console.log(this); // Output is only empty object {}

        return `This is ${this.name} and I am ${this.age}. I am a ${this.profession}.`
    }
}
console.log(person.showBio());
// This is undefined and I am undefined. I am a undefined. 
// This 'this' indicates the window object not this object itself. That is why 'undefined' is resulted