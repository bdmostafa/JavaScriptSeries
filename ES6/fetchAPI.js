// fetch API - works with Promise
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Object
    .then(json => console.log(json)) // data
    .catch(error => console.log(error)); // For error handling
 */

// In practice =================================

// const postObj = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
// }

// Post data to server using POST method
document.getElementById('submit').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const post = {
        title: title,
        body: body
    }
    postToServer(post);

})

function postToServer(post) {
    fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            // body: JSON.stringify(postObj),
            body: JSON.stringify(post),
            headers: {
                'content-type': 'application/json; charset=utf-8'
            }
        })
        .then(response => response.json()) // Object
        // .then(json => displayUserData(json)) // data
        .then(data => console.log(data))
        .catch(error => console.log(error)); // For error handling
}

// Get data from the server
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Object
    .then(json => displayUserData(json)) // data
    .catch(error => console.log(error)); // For error handling

function displayUserData(users) {
    const ul = document.getElementById('users-container');
    const userNames = users.map(user => user.username);

    for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement('li');
        li.innerText = username;
        li.style.listStyle = 'none';
        ul.appendChild(li);
    }
}