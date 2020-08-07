let first = 2;
let second = 2;
if (first == second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

second = '2';
if (first == second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

second = '2';
if (first === second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

first = 1;
second = true;
if (first == second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

first = 1;
second = false;
if (first == second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

first = 1;
second = true;
if (first === second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

// 0 and false both are negative
first = 0;
second = false;
if (first == second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}

// 0 and false both are negative but different type
first = 0;
second = false;
if (first === second) {
    console.log('condition is true')
} else {
    console.log('condition is false')
}