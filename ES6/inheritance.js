class Parent {
    // When class is instantiated with 'new' keyword, constructor is running automatically
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


// Another example of inheritance ====================================
class Programmer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.lang = [];
    }
    getInfo() {
        return `
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
    set mainLang(language) {
        this.lang.push(language);
    }

    // static - not access to out of this class
    static salary() {
        console.log('My salary is ...');
    }
}

class bestProgrammer extends Programmer {
    constructor(name, age, extraLanguage) {
        // super() indicates that name and age come from parent class
        super(name, age);
        this.extraLanguage = extraLanguage;
    }
    get extraLang() {
        return this.extraLanguage;
    }
    // To set mainLang on this class that will come from parent
    set mainLang(language) {
        return this.lang.push(language);
    }
    // To set parent method using super()
    getInfo() {
        return super.getInfo();
    }
}

const Shams = new Programmer('Shams', 12);

console.log(Shams.getInfo()); // name - Shams age - 12 language -
Shams.mainLang = 'JavaScript';
console.log(Shams.getInfo()); // name - Shams age - 12 language - JavaScript


const Mostafa = new bestProgrammer('Mostafa', 29, 'Python');

console.log(Mostafa.name);
console.log(Mostafa.nickName); // Mostafa
console.log(Mostafa.extraLanguage);
console.log(Mostafa.extraLang); // Python - from get property
console.log(Mostafa.getInfo());

// To update name with nickName
Mostafa.nickName = 'Shams';
console.log(Mostafa.nickName); // Shams
console.log(Mostafa.name); // Shams

Mostafa.mainLang = 'JavaScript';
console.log(Mostafa.getInfo());