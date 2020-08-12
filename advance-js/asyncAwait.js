async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    return data;
}

loadData().then(data => displayUserData(data));

function displayUserData(data) {
    const ul = document.querySelector('ul');
    const userNames = data.map(user => user.username);
    const userEmails = data.map(user => user.email);

    for (let i = 0; i < userNames.length; i++) {
        const userName = userNames[i];
        const userEmail = userEmails[i];
        const li = document.createElement('li');
        const p = document.createElement('p');
        li.innerText = userName;
        p.innerText = userEmail;
        li.appendChild(p)
        ul.appendChild(li);
    }
}