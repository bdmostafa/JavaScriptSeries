console.log(1 + 1)

// Data Types =================
// Primitives - single value
// string, number, boolean, null, symbol, bigint, undefined

// const, let, var
const productName = 'Web Course' // string
const productPrice = 50.49 // number (float)
const productQuantity = 5 // number (int)
const productIsAvailable = 'true' // boolean
const nextProductIsAvailable = null // null
let productId // undefined

console.log(
    'Product Name: ' + productName + 'ID: ' + productId + ' Product Price: ' + productPrice + ' Quantity: ' + productQuantity + ' Availability: ' + productIsAvailable + ' Next Product: ' + nextProductIsAvailable
)

// symbol() generates unique number
const firstPrice = Symbol(99)
const secondPrice = Symbol(99)

console.log(firstPrice === secondPrice) // false