/*
JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript 's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
*/
class Student {
    // When class is instantiated with 'new' keyword, constructor is running automatically
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.lang = [];
        this.country = 'Bangladesh';
    }
    getInfo() {
        return `
        id - ${this.id}
        name - ${this.name}
        age - ${this.age}
        language -${this.lang.join(', ')}`;
    }
    setLang(lang) {
        this.lang.push(lang);
    }
    // get - to get the value - nickName is Property, not a function
    get nickName() {
        return this.name;
    }
    // set - to set the value - this is not a function but a property
    set nickName(val) {
        this.name = val;
    }

    // static - not access to out of this class
    static salary() {
        console.log('My salary is ...');
    }

}

const student1 = new Student(1, 'Mostafa', 29);
console.log(typeof (student1)); // object
const student2 = new Student(2, 'Mahmud', 30);

console.log(student1, student2);
// Student { id: 1, name: 'Mostafa', age: 29, country: 'Bangladesh' } Student { id: 2, name: 'Mahmud', age: 30, country: 'Bangladesh' }
console.log(student1.name); // Mostafa

console.log(student1.getInfo());

student1.setLang('JavaScript');
student1.setLang('Python');
console.log(student1.getInfo());

// Output of set and get =============
console.log(student1.nickName); // Mostafa
student1.nickName = 'Shams';
console.log(student1.nickName); // Shams
console.log(student1.name); // Shams

// Output of static
// student1.salary(); // This is not valid
// Only accessible for Class name itself to call
Student.salary(); // My salary is ...