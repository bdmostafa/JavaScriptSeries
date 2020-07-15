// Switch statement =============================

// true && true = true
// true && false = false
// true || false = true
// true && 100 = 100
// 100 && true = true
// true || 100 = true
// false || 100 = 100

const bookPrice = 60;

let freeShipping = false;
let handPicked = false;

switch (bookPrice) {
    case 100:
        freeShipping = true;
        handPicked = false;
        break;
    case (bookPrice >= 100 && bookPrice):
        freeShipping = true;
        handPicked = false;
        break;
    case (bookPrice >= 60 && bookPrice):
        freeShipping = false;
        handPicked = true;
        break;
    default:
        freeShipping = false;
        handPicked = false;
}
console.log(freeShipping); // true
console.log(handPicked); // false