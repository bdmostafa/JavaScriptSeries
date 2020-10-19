// Abstraction principles
class Animal {
    constructor() {
        
    }
    talk(){
        throw new Error("You must implement talk method");
    }
}

class Cat extends Animal{
    talk(){
        console.log("meow meow");
    }
}

class Dog extends Animal{
    talks(){
        console.log("ghew ghew");
    }
    talk(){
        console.log("ghew ghew");
    }
}

const myCat = new Cat();
myCat.talk();

const myDog = new Dog();
myDog.talk();


// Another example =================================
class Person {
    constructor({fName, lName, career}) {
        this.fName = fName;
        this.lName = lName;
        this.career = career;
        this.skills = [];
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    // static means that it is not accessible out of this class
    static get amount() {
        return Person._amount;
    }
    
    // fullName is not a function, its property using getter and setter
    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            // destructuring array from received string in parameter after split()
            [this.fName, this.lName] = fN.split(' ');
        } else {
            throw Error('Bad fullname');
        }
    }

    learn(skill) {
        this.skills.push(skill);
    }
}

class Career {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

console.log(Person.amount); // undefined

const mostafa = new Person({
    fName: 'Mostafa',
    lName: 'Mahmud',
    career: new Career('Upwork', 'developer', 150000)
});

console.log(Person.amount); // 1

const shams = new Person({
    fName: 'Safwan',
    lName: 'Shams',
    career: new Career('Google', 'programmer', 400000)
});

console.log(Person.amount); // 2

mostafa.fullName = 'Jhankar Mahbub';
mostafa.learn('es6');
shams.learn('marketing');
mostafa.learn('es7');

console.log(mostafa, shams);

console.log(mostafa instanceof Person, shams instanceof Career); // true false