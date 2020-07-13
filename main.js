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

// JS template string
console.log(`
    Product Name:  ${productName} ID:  ${productId} Product Price: ${productPrice} Quantity: ${productQuantity} Availability: ${productIsAvailable} Next Product: ${nextProductIsAvailable}
`)

//  Array (push, pop, length, shift, unshift, slice, splice)
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish)
// ['angel', 'clown', 'mandarin', 'sturgeon']

const popped = myFish.pop();
const count = myFish.push('salmon')
const arrLength = myFish.length

console.log(popped) // sturgeon
console.log(count) // 4
console.log(myFish)
// [ 'angel', 'clown', 'mandarin', 'salmon' ] 
console.log(arrLength) // 4

myFish.shift()
console.log(myFish)
// [ 'clown', 'mandarin', 'salmon' ] 

myFish.unshift('angel new')
console.log(myFish)
// [ 'angel new', 'clown', 'mandarin', 'salmon' ] 

const sliced = myFish.slice(1, 3)
console.log(sliced)
// [ 'clown', 'mandarin' ]

const splicedNotRemove = myFish.splice(2, 0, 'hilsha', 'rui')
console.log(myFish)
// ['angel new', 'clown', 'hilsha', 'rui', 'mandarin', 'salmon']
console.log(splicedNotRemove) // []

const splicedWithRemove = myFish.splice(1, 2, 'koi')
console.log(myFish)
// ['angel new', 'koi', 'rui', 'mandarin', 'salmon']
console.log(splicedWithRemove)
// [ 'clown', 'hilsha' ]

// Object (Key-value pair)
const productObj = {
    pName: 'banana',
    pPrice: 12,
    pQuantity: 4,
    pAvailability: true
};

// Two ways to call object (. or [])
console.log(`
    Product Name: ${productObj.pName} 
    Product Price: ${productObj.pPrice}
    Quantity: ${productObj['pQuantity']} 
    Availability: ${productObj['pAvailability']}
`)

// Function
// Object passing through a function
const productObj2 = {
    pName: 'mango',
    pPrice: 120,
    pQuantity: 8,
    pAvailability: false
};

function showProductInfo(pObj) {
    console.log(pObj);

    return `
         Product Name: ${pObj.pName}
         Product Price: ${pObj.pPrice}
         Quantity: ${pObj.pQuantity}
         Availability: ${pObj.pAvailability}
    `
}

const product1 = showProductInfo(productObj);
const product2 = showProductInfo(productObj2)
console.log(product1);
console.log(product2)