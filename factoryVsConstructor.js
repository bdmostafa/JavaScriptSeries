// An object
const productObj = {
    productName: 'Mango',
    productPrice: 100,
    productQuantity: 4,
    productAvailability: false
}


// To create an object just like above 'product' with Factory Function
function createProductObj(productName, productPrice, productQuantity, productAvailability) {
    return {
        // productName: productName,
        // productPrice: productPrice,
        // productQuantity: productQuantity,
        // productAvailability: productAvailability

        // In ES6, if property-value is the same name, put just one name
        productName,
        productPrice,
        productQuantity,
        productAvailability
    }

}

console.log(createProductObj('Mango', 100, 4, true))


// Constructor function - (blueprint / structure)
// It is recommended to start with capital latter
function Product(productName, productPrice, productQuantity, productAvailability) {
    // return {
    //     productName,
    //     productPrice,
    //     productQuantity,
    //     productAvailability
    // }

    // 'this' KW indicates object 'product' that is created by calling constructor function
    this.productName = productName
    this.productPrice = productPrice
    this.productQuantity = productQuantity
    this.productAvailability = productAvailability
    this.showProductInfo = function () {
        return `Product Name - ${this.productName}, Price - ${this.productPrice}, Quantity - ${this.productQuantity}, Available - ${this.productAvailability}`
    }
    // Using with aero () function, without 'this' kw and value from function parameter directly
    // this.showProductInfo = () => {
    //     return `Product Name - ${productName}, Price - ${productPrice}, Quantity - ${productQuantity}, Available - ${productAvailability}`
    // }

}

const product = new Product('Banana', 30, 12, false)
console.log(product);
console.log(product.productName);
console.log(product.showProductInfo());

const product2 = new Product('Onion', 45, '1 kg', true);
console.log(product2.showProductInfo());