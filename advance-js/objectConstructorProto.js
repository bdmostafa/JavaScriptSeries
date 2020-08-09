function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(this.firstName, this.lastName);
    }
}

const person1 = new Person('Mostafa', 'Mahmud');
console.log(person1.firstName);

const person2 = new Person('Safwan', 'Shams');
console.log(person2.lastName);

// console.log(Person.prototype === parson1.__proto__);

// Best way to create single location
Person.prototype.fullNameProto = function () {
    console.log(this.firstName + ' ' + this.lastName + 'from proto')
}

console.log(person1.fullName());
console.log(person1.fullNameProto());

// If the function name is the same, proto find the object at first level. If not, find next and so on
Person.prototype.fullName = function () {
    console.log(this.firstName + ' ' + this.lastName + 'from proto')
}

console.log(person1.fullName());

// proto chain =================
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction -->Function.prototype --> Object.prototype --> null
// String: myString -->String.prototype --> Object.prototype --> null
// Number: myNumber -->Number.prototype --> Object.prototype --> null
// Boolean: myBoolean -->Boolean.prototype --> Object.prototype --> null