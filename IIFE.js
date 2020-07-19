// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// It is not recommended to declare a variable globally if it is not important because it can override others file when rendering. So to be safe it is to be inside IIFE so that it is under local scope

(function () {
    let persons = [{
            name: 'Mostafa',
            age: 29,
            gender: 'male',
            status: 'developer',
            availability: true
        },
        {
            name: 'Mahmud',
            age: 32,
            gender: 'male',
            status: 'designer',
            availability: false
        }
    ];

    function showPersonInfo(persons) {
        // initialization by '' for not to count undefined
        let singlePerson = '';

        for (let person of persons) {
            // console.log(person)

            // singlePerson += `
            // Name: ${person.name}
            // Age: ${person.age}
            // Gender: ${person.gender}
            // Status: ${person.status}
            // ${person.availability ? 'Available to work' : 'Not available'}
            // `

            // Or we can do obj destructuring to minimize coding
            const {
                name,
                age,
                gender,
                status,
                availability
            } = person;

            singlePerson += `
        Name: ${name}
        Age: ${age}
        Gender: ${gender}
        Status: ${status}
        ${availability ? 'Available to work' : 'Not available'}
        `
        }
        return singlePerson;
    }
    const person = showPersonInfo(persons);
    console.log(person);
}())