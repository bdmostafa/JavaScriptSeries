// An object
const product = {
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