const array = ['I', 'love', 'programming'];

// forEach loop =======================================
array.forEach(function (element, idx, arr) {
    console.log(idx, element, arr);
    /*
    0 'I' ['I', 'love', 'programming']
    1 'love' ['I', 'love', 'programming']
    2 'programming' ['I', 'love', 'programming']
    */
    console.log(element);
    // I, love, programming
})

// No need to call function outside the loop because of callback function. It runs itself under forEach() method

// forEach in practice =============================
const products = [{
        pName: 'banana',
        pPrice: 12,
        pQuantity: 4,
        pAvailability: true
    },
    {
        pName: 'mango',
        pPrice: 65,
        pQuantity: 2,
        pAvailability: true
    }
];

function showProductsInfo(products) {
    // initialization by '' for not to count undefined
    let singleProduct = '';

    products.forEach(function (product) {
        // console.log(product)
        singleProduct += `
        Product Name: ${product.pName}
        Product Price: ${product.pPrice}
        Product Quantity: ${product.pQuantity}
        Product Availability: ${product.pAvailability}
        `
    })

    // for loop is time consuming ------
    // for (let idx = 0; idx < products.length; idx++) {
    //     singleProduct += `
    //     Product Name: ${products[idx].pName}
    //     Product Price: ${products[idx].pPrice}
    //     Product Quantity: ${products[idx].pQuantity}
    //     Product Availability: ${products[idx].pAvailability}
    //     `
    // }

    return singleProduct;

}

const product = showProductsInfo(products);
console.log(product);


// for of loop (in array) =======================================
for (let el of array) {
    console.log(el);
}

// for of loop in practice (array object)======================
const persons = [{
        name: 'Mostafa',
        age: 29,
        gender: 'male',
        status: 'developer'
    },
    {
        name: 'Mahmud',
        age: 32,
        gender: 'male',
        status: 'designer'
    }
];

function showPersonInfo(persons) {
    // initialization by '' for not to count undefined
    let singlePerson = '';

    for (let person of persons) {
        console.log(person)
        singlePerson += `
        Name: ${person.name}
        Age: ${person.age}
        Gender: ${person.gender}
        Status: ${person.status}
        `
    }
    return singlePerson;

}

const person = showPersonInfo(persons);
console.log(person);



// for in loop (in object) =======================================
const personObj = {
    name: 'Mostafa',
    age: 30,
    gender: 'male',
    status: 'developer'
}

for (let el in personObj) {
    console.log(el);
    // name, age, gender, status

    // el is not exact property, but variable that references property
    console.log(el, personObj[el]);
    // name Mostafa, age 30, gender male, status developer
}

// for in loop can be used in array but not recommended because it sometimes does not have output in choronological order