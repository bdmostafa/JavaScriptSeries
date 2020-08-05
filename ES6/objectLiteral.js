// Object literal
function bio({
    firstName,
    lastName,
    coveredField
}) {
    return {
        // If property and value is the same name, no need to use repeatedly
        firstName,
        lastName,
        commonLang: ['html', 'css', 'js', 'c', 'c++'],
        // coveredField: function(){}
        // No need to write 'function' in this situation
        coveredField() {
            return `My first name is ${this.firstName}, second name is ${this.lastName} and I covered ${coveredField}`;
        }
    }
}

const myBio = bio({
    firstName: 'Mostafa',
    lastName: 'Mahmud',
    coveredField: 'ES6'
});

console.log(myBio.firstName);
console.log(myBio.commonLang);
console.log(myBio.coveredField());