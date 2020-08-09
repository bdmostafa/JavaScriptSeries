async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return data;
}

loadData().then(data => displayUserData(data));

function displayUserData(data) {
    const ul = document.querySelector('ul');
    const userNames = data.map(user => user.username);

    for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement('li');
        li.innerText = username;
        ul.appendChild(li);
    }
}