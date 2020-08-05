const bio = (firstName, lastName, profession) => {
    return `${firstName} ${lastName} is a ${profession}`;
}

console.log(bio('Mostafa', 'Mahmud', 'Web Developer'));
// Mostafa Mahmud is a Web Developer

// Parameter value passing order must be maintained
console.log(bio('Mostafa', 'Web Developer', 'Mahmud'));
// Mostafa Web Developer is a Mahmud


// To solve this problem array destructuring can be used
// Working with function
const myBio = ({
    firstName,
    lastName,
    profession
}) => {
    return `${firstName} ${lastName} is a ${profession}`;
}

// Passing as object through parameter instead of string
console.log(myBio({
    profession: 'Programmer',
    firstName: 'Mostafa',
    lastName: 'Mahmud'
}));
// Mostafa Mahmud is a Programmer

console.log(myBio({
    profession: 'Programmer',
    lastName: 'Mahmud',
    firstName: 'Mostafa'
}));
// Mostafa Mahmud is a Programmer
// Noted: Order maintain is not mandatory


const comments = [{
        id: 1,
        body: 'good comment'
    },
    {
        id: 2,
        body: 'bad comment'
    },
    {
        id: 5,
        body: 'first comment'
    },
    {
        id: 3,
        body: 'no comment'
    }
];

const badComment = comments.findIndex(comment => comment.id === 2);
console.log(badComment); // 1

// Firstly slice all previous comments of the targeted comment
// then slice all the following comments without targeted comment
const chosenComment = [
    // Spread operator is used for array flat
    ...comments.slice(0, badComment),
    ...comments.slice(badComment + 1)
];
console.log(chosenComment);