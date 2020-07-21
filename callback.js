// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function personAssigned(name, age, callback) {
    return `${name} - ${age} - ${callback()}`;
}

function webDesign() {
    return 'Your task is web design';
}

function webDevelop() {
    return 'Your task is web develop';
}

console.log(personAssigned('Mostafa', 29, webDesign));
console.log(personAssigned('Mahmud', 32, webDevelop));