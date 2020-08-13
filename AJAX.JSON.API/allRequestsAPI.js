// https://jsonplaceholder.typicode.com/guide.html

// Get request =============================
async function getTodos() {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(todo => todo.json());
    console.log(todos); // multiple todos
    console.log(todos[0]); // single todo
}
getTodos();


// POST request (new todo) =============================
// Creating data object to use it as an argument in fetch()
const data = {
    title: 'Hello JavaScript!',
    body: 'Mostafa',
    completed: true,
    userId: 1
}

async function postTodo() {
    const todo = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(todo => todo.json());
    console.log(todo)
}
postTodo();


// PUT request (update an existing todo) ========================
const updateData = {
    title: 'Hello Update JavaScript!',
    body: 'Mostafa',
    completed: true,
    userId: 1
}

async function updateTodo() {
    const todo = await fetch('https://jsonplaceholder.typicode.com/posts/10', {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(todo => todo.json());
    console.log(todo)
}
updateTodo();


// DELETE request (delete an existing todo) ========================
const deleteData = {
    title: 'Hello delete JavaScript!',
    body: 'Mostafa',
    completed: true,
    userId: 1
}

async function deleteTodo() {
    const todo = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    }).then(todo => todo.json());
    console.log(todo)
}
deleteTodo();