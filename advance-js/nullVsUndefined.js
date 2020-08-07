let add;
console.log(add); // undefined


add = (num1, num2) => {
    console.log(num1 + num2); // 50
}
const addResult = add(25, 25);
console.log(addResult); // undefined


add = (num1, num2) => {
    console.log(num1 + num2); // 50
    return;
}
const result = add(20, 30);
console.log(result); // undefined


add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(20, 30)); // 50

add = (num1, num2) => {
    return num1, num2;
}
console.log(add(20)); // undefined

add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(20)); // NaN

add = undefined;
console.log(add); // undefined

let bio = {
    name: 'Mostafa',
    age: 29
}
console.log(bio.id); // undefined

bio = [1, 2, 3];
console.log(bio[5]); // undefined

bio = null;
console.log(bio); // null