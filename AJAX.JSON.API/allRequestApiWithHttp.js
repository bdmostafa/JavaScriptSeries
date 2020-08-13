// Selectors
const getDataBtn = document.getElementById('get-data');
const postDataBtn = document.getElementById('post-data');
const updateDataBtn = document.getElementById('update-data');
const deleteDataBtn = document.getElementById('delete-data');
const displayData = document.getElementById('display-data');
let postData = [];

// Instantiate http
const http = new Http();

// Event Listener
getDataBtn.addEventListener('click', http.get);
postDataBtn.addEventListener('click', http.post);
updateDataBtn.addEventListener('click', http.update);
deleteDataBtn.addEventListener('click', http.delete);


// Functions
// get method from Http.js library
http
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        data.forEach(data => {
            postData.push(data.id, data.title, data.body)
        })
        displayData.innerText = postData;
    })


// post method from Http.js library
// data object ready for post
const data = {
    title: 'Hello JavaScript!',
    completed: true,
    userId: 1
}


http
    .post('https://jsonplaceholder.typicode.com/posts', data)
    .then(result => {
        // postData = '';
        // displayData.innerText = data;
        console.log(result);
    })

// update method from Http.js library
// data object ready for post
const updateData = {
    title: 'Hello JavaScript (updated)!',
    completed: true,
    userId: 11
}

http
    .update('https://jsonplaceholder.typicode.com/posts/1', updateData)
    .then(result => {
        // postData = '';
        // displayData.innerText = data;
        console.log(result);
    })

// delete method from Http.js library
http
    .delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(result => {
        console.log(result);
    })