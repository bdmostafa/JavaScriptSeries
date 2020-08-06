class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.country = 'Bangladesh';
    }

}

const student1 = new Student(1, 'Mostafa', 29);
const student2 = new Student(2, 'Mahmud', 30);

console.log(student1, student2);
console.log(student1.name);