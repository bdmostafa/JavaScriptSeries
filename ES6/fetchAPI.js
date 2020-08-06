// fetch API - works with Promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // Object
    .then(json => console.log(json)) // data
    .catch(error => console.log(error)); // For error handling