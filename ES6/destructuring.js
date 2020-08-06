// Destructuring is the pulling ou of the values from an array or an object
// Array destructuring
const myBio = ['Mostafa', 29, 'Web Developer'];

// const [name] = myBio;
// const [, age] = myBio;
// const [, , profession] = myBio;

const [name, age, profession] = myBio; // Index-variable order maintain must be followed in array destructuring

console.log(name); // Mostafa
console.log(age); // 29
console.log(profession); // Web Developer

const friendsArray = ['a', 'b', 'c', 'd', 'e']
const [bestFriend, ...averageFriends] = friendsArray;

console.log(bestFriend); // a
console.log(averageFriends); // [ 'b', 'c', 'd', 'e' ] 

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

// Complex object destructuring (objBio.shareBio)
const {
    facebook,
    instagram
} = objBio.shareBio;
console.log(facebook, instagram); // true false