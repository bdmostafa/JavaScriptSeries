class Parent {
    constructor() {
        this.fatherName = 'Mostafa';
    }
}

class Child extends Parent {
    constructor(name) {
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super();
        this.name = name;
    }
    // Function creating and upper property accessing through it
    fullName() {
        return `Name: ${this.name} Father Name: ${this.fatherName}`
    }
}

const baby = new Child('Shams');
const newBaby = new Child('New baby');

console.log(baby);
console.log(newBaby);
console.log(baby.fullName());