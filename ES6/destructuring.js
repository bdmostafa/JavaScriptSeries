// Destructuring is the pulling ou of the values from an array or an object
// Array destructuring
const myBio = ['Mostafa', 29, 'Web Developer'];

// const [name] = myBio;
// const [, age] = myBio;
// const [, , profession] = myBio;

const [name, age, profession] = myBio;

console.log(name); // Mostafa
console.log(age); // 29
console.log(profession); // Web Developer

// Object destructuring
const objBio = {
    userName: 'Mostafa',
    id: 001,
    status: 'Developer',
    isMarried: true,
    shareBio: {
        facebook: true,
        twitter: true,
        vk: false,
        instagram: false
    }
}

const {
    userName,
    id,
    status,
    isMarried
} = objBio;

console.log(userName, id, status, isMarried);
// Mostafa 1 Developer true 

const {
    facebook,
    instagram
} = objBio.shareBio;
console.log(facebook, instagram); // true false