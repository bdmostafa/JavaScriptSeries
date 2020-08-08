// https://babeljs.io/

const arr = [1, 2, 3];
const doubleArr = arr.map(num => num * 2);

console.log(doubleArr);


async function* agf() {
    await 1;
    yield 2;
}