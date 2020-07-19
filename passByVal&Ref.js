// All the primitives follow "pass by value"
// Pass by value
const a = 10;

function passByVal(a) {
    let b = a;
    b = 20;
    a = 30;
    console.log(b); // 20
    console.log(a); // 30
}
console.log(a); // 10
passByVal(a);
console.log(a); // 10
// There is no change in the main a value

// All reference data type like object, array etc. follow "pass by reference"
// Pass by reference
const aObj = {
    num: 10
}

function passByRef(aObj) {
    console.log(aObj); // { num: 10 }

    const bObj = aObj;
    console.log(bObj); // { num: 10 }

    bObj.num++;
    console.log(bObj); // { num: 11 }
    console.log(aObj); // { num: 11 }
}

console.log(aObj); // { num: 10 }
passByRef(aObj);
console.log(aObj) // { num: 11 }
// There is a change in the main object as well.