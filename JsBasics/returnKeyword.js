function sayHi() {
    return 'Hi there!';
    return 'Welcome'; // This is not executable
}
console.log(sayHi());

function greeting(lang, name) {
    if (lang === 'en-US') return `Hi ${name}! How are you?`;
    return `hai ${name}! apni kemon asen?`;
}
console.log(greeting('bn', 'Mostafa'));