// 1. global scope when 'this' is outside curly brackets and this indicates the whole window itself
console.log(this); // {}
this.sayHi = 'Hello';
console.log(this); // {sayHi: 'Hello'}
// It's not recommended to use in global scope (bad practice)

// 2. 'this' indicates parent object when it is declared inside method
// Here parent object is student
const student = {
    sName: 'Mostafa',
    sId: 03,
    sCourse: 'C Programming',
    sDept: 'IIT',
    showStudentInfo() {
        return `Name - ${this.sName}, ID - ${this.sId}, Course - ${this.sCourse}, Department - ${this.sDept}`;
    }
}

console.log(student.showStudentInfo());


// 3. 'this' indicates object that is created through constructor function
// Here objects are product1 and product2
function Product(productName, productPrice, productQuantity, productAvailability) {

    this.productName = productName
    this.productPrice = productPrice
    this.productQuantity = productQuantity
    this.productAvailability = productAvailability
    this.showProductInfo = function () {
        return `Product Name - ${this.productName}, Price - ${this.productPrice}, Quantity - ${this.productQuantity}, Available - ${this.productAvailability}`
    }
}

const product1 = new Product('Banana', 30, 12, false)
console.log(product1.productName);
console.log(product1.showProductInfo());

const product2 = new Product('Onion', 45, '1 kg', true);
console.log(product2.showProductInfo());


// 4. 'this' indicates window object in not strict mode but undefined in  in strict mode (local scope)
// source: https://www.youtube.com/watch?v=saB8IvU3ojE&list=PLyrs5AgsUPcXhDGQ02G13cdp5Ts7jHR5k&index=60

function sampleFunction() {
    console.log(this);
}
sampleFunction();

// Here 'this' indicates parent object student (from above)
console.log(student.showStudentInfo());

// Here 'this' indicates the window object because 'showStudentInfo' is called in a plain way without any reference
const demoStudent = student.showStudentInfo;
console.log(demoStudent()); // undefined because node js does not support window obj

// So 'this' behaving relies on how we call the method whether with reference or in a plain way

// To solve this problem use .call() method
console.log(demoStudent.call(student));

// ANother example of .call() and .apply()
const product = {
    pName: 'Banana',
    pPrice: 25,
    pQuantity: 4,
    showProductInfo() {
        function innerFunction(sayHi) {
            // this indicates window object if .call() is not added in function call
            console.log(this);
            // console.log(sayHi);
        }
        innerFunction();
        innerFunction.call(product);
        // innerFunction.call(product, 'hello'); // string args pass in .call()
        // innerFunction.apply(product, ['hello']); // array args pass in .apply()

        console.log(this);
        return `${this.pName} - ${this.pPrice} - ${this.pQuantity}`
    }
}

console.log(product.showProductInfo());
const demoProduct = product.showProductInfo;
console.log(demoProduct());
console.log(demoProduct.call(product));