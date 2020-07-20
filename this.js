// 1. global scope when 'this' is outside curly brackets and this indicates the whole window itself
console.log(this); // {}


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