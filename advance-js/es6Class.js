class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const person = new Person('Mostafa', 'Mahmud');

console.log(person);
console.log(person.fullName());

class Student extends Person {
    constructor(firstName, lastName, enrolledCourse) {
        super(firstName, lastName);
        this.enrolledCourse = enrolledCourse;;
    }
    withCourse() {
        return `${this.firstName} ${this.lastName} Enrolled in ${this.enrolledCourse}`;
    }
    fullName() {
        console.log('overrides parents method fullName'); // overrides parents method fullName 

        // To avoid override and take method from parent and add extra
        return super.fullName() + ' extra edited';
    }
    // To more secure, 'static' accessible only this Class, not outside Class and in other objects
    // private method
    static income() {
        return `secret amount $999999`;
    }
}

const student = new Student('Mostafa', 'Mahmud', 'JavaScript');

console.log(student);
/*
Student {
    firstName: 'Mostafa',
    lastName: 'Mahmud',
    enrolledCourse: 'JavaScript'
}
*/

console.log(student.withCourse()); // Mostafa Mahmud Enrolled in JavaScript 
console.log(student.fullName()); // Mostafa Mahmud extra edited
// From parent class if fullName() is not declared in Student class

console.log(student.income()); // student.income is not a function
console.log(Student.income()); // secret amount $999999 