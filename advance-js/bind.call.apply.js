const person = {
    firstName: 'Mostafa',
    lastName: 'Mahmud',
    salary: 25000,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    chargeBill: function (amount, tips = 0, tax = 0) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

console.log(person.getFullName());
console.log(person.salary); // 25000
person.chargeBill(300);
console.log(person.salary); // 24700

const shams = {
    firstName: 'Safwan',
    lastName: 'Shams',
    salary: 15000
}

// To bind person object with shams object use bind() ======================================
console.log(shams.salary); // 15000
const shamsChargeBill = person.chargeBill.bind(shams);
console.log(shamsChargeBill(300)); // 14700
console.log(shamsChargeBill(500)); // 14200

console.log(shams.salary); // 14200

console.log(person.salary); // 24700
console.log(person.chargeBill(500)); // 24200


// Direct access from person object use call() ============================================
person.chargeBill.call(shams, 300, 50, 30);
console.log(shams.salary); // 13820


// Another method is apply() ==============================
person.chargeBill.apply(shams, [300, 50, 30]);
console.log(shams.salary); // 13440

// Bind is a bit different. It returns a new function. Call and Apply execute the current function immediately

// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.