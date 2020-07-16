// arrow function
const func = () => {
    console.log('function in variable')
}
func();

const Func = () => {
    return 'go go programming...';
}
console.log(Func());

// arrow function without return keyword and curly brackets
const oneLineFunc = () => 'go go programming...';
console.log(oneLineFunc());

// When signle parameter, we can create function without bracket
const persons = [{
        name: 'Mostafa',
        age: 29,
        gender: 'male',
        status: 'developer'
    },
    {
        name: 'Mahmud',
        age: 32,
        gender: 'male',
        status: 'designer'
    }
];
const showPersonInfo = persons => {
    let singlePerson = '';

    for (let person of persons) {
        console.log(person)
        singlePerson += `
        Name: ${person.name}
        Age: ${person.age}
        Gender: ${person.gender}
        Status: ${person.status}
        `
    }
    return singlePerson;

}

const person = showPersonInfo(persons);
console.log(person);