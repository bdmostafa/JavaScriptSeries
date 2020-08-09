function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// Single location
Person.prototype.fullName = function () {
    console.log(this.firstName + ' ' + this.lastName);
};

function Student(firstName, lastName, enrolledCourse) {
    Person.call(this, firstName, lastName);
    this.enrolledCourse = enrolledCourse;
}

// Single location
Student.prototype.withCourse = function () {
    console.log(`${this.firstName} ${this.lastName} Enrolled in ${this.enrolledCourse}`);
};

const student = new Student('Mostafa', 'Mahmud', 'JavaScript');

console.log(student);
/*
Student {
    firstName: 'Mostafa',
    lastName: 'Mahmud',
    enrolledCourse: 'JavaScript'
}
*/
console.log(student.firstName);
console.log(student.enrolledCourse);

console.log(student.withCourse());

// From Person prototype fullName()
console.log(student.fullName()); // student.fullName is not a function
// Because it inherits only from Person body, not from Person.prototype

// To solve this problem
Student.prototype.__proto__ = Person.prototype;
console.log(student.fullName()); // Mostafa Mahmud