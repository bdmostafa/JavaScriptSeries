const users = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    }
];

const comments = [{
        postId: 1,
        id: 1,
        name: "Leanne Graham",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
    },
    {
        postId: 2,
        id: 2,
        name: "Ervin Howell",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
    },
    {
        postId: 3,
        id: 3,
        name: "Clementine Bauch",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        postId: 4,
        id: 4,
        name: "Clementine Bauch",
        email: "Lew@alysha.tv",
        body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati"
    },
    {
        postId: 5,
        id: 1,
        name: "Leanne Graham",
        email: "Hayden@althea.biz",
        body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et"
    }
];

// Find user
const id = 3;
const findUser = users.find(user => user.id === id);
console.log(findUser);

// Matching with id
// const findComments = comments.filter(comment => comment.id === findUser.id);

// Matching with name
const findComments = comments.filter(comment => comment.name === findUser.name)
    .map(commentBody => `<p>The user <b>${findUser.name}</b>'s comments are as follows:</p><p>${commentBody.body}</p>`)
    .join(', ')
    .replace(/,/, '');

document.body.innerHTML = findComments;

console.log(findComments);