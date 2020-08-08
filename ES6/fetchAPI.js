// fetch API - works with Promise
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Object
    .then(json => console.log(json)) // data
    .catch(error => console.log(error)); // For error handling
 */

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Object
    .then(json => displayUserData(json)) // data
    .catch(error => console.log(error)); // For error handling

// In practice
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