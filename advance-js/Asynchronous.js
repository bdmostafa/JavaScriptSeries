// JavaScript is a single threaded programming language. Basically behind the scene, it is an Asynchronous language in nature

// Synchronous JavaScript
console.log(1);
console.log(2);
console.log(3);
// 1 2 3

// Asynchronous JavaScript
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000)
console.log(3);
// 1 3 2

// Asynchronous example (undefined)
console.log(1); // 1
console.log(getNumber(2)); // undefined because of not getting result before setTimeout 3 seconds so console.log directly is not recommended
console.log(3); // 3
// calling after 3 seconds

function getNumber(num) {
    setTimeout(() => {
        console.log('calling after 3 seconds');
        return num;
    }, 3000)
}

// To solve this problem, there are three methods
// 1. callback function ====================
// 2. Promise API ======================
// 3. async await - behind the scene works with Promise (Syntax issuer) ================================

// callback function (when long )
console.log(1);
getNum(2, (num) => {
    // arrow function () declaration as callback
    console.log(num)
});
console.log(3);
// 1 3 2

function getNum(num, callback) {
    setTimeout(() => {
        console.log('calling after 3 seconds');
        // calling callback function through parameter
        callback(num);
    }, 3000);
}

// callback function - a practical example (callback hell/christmas tree) ===========================
// 1. Getting user - 2s
// 2. course enrollment - 2s
// 3. price of the course - 2s

getUser(1, function (user) {
    console.log(user);
    enrolledCourses(user.name, function (courses) {
        console.log(courses);
        getPrice(courses[0], function () {
            console.log('JavaScript course price is 500 USD.')
        })
    })
})

// Getting user - 2s
function getUser(id, callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: 'Mostafa',
            profession: 'Web Developer'
        });
    }, 2000)
}

// course enrollment - 2s
function enrolledCourses(userName, callback) {
    setTimeout(() => {
        callback(['JavaScript', 'React', 'Node']);
    }, 2000)
}

// price of the course - 2s
function getPrice(courseName, callback) {
    setTimeout(() => {
        callback()
    }, 2000)
}

// Promise (constructor function) =====================================================
// Pending, resolved, reject
const tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('after 3s');
        reject(new Error('some error occurred.'))
    }, 3000);
})

tryPromise
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.log(error);
    })



// Converting previous callback example to Promise =====================================
getUser(1)
    .then(user => {
        console.log(user);
        return enrolledCourses(user.name)
        // .then(courses => {
        //     console.log(courses)
        // })
        // .catch(err => err.message);
    })
    .then(courses => {
        console.log(courses);
        return getPrice(courses[0]);
    })
    .then(price => {
        console.log(price);
    })
    .catch(err => {
        console.log(err.message)
    })

// async/await =========================================================
// Converting then() catch() to async/await =========
async function getResult() {
    const user = await getUser(1);
    const courses = await enrolledCourses(user.name);
    const price = await getPrice(courses[0]);
    console.log(user, courses, price);
}
getResult();


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mostafa',
                profession: 'Web Developer'
            });
            reject(new Error('User not found.'));
        }, 2000)
    })
}

function enrolledCourses(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['JavaScript', 'React', 'Node']);
            reject(new Error('Courses not found'));
        }, 2000)
    })
}

function getPrice(courseName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Price is 500 USD');
            reject(new Error('Price not found.'));
        }, 2000)
    })
}


// Promise - resolve, reject, all, race ======================================
const p1 = Promise.resolve('step1');
const p2 = Promise.resolve('step2');
const p3 = Promise.reject('step3');
// const p3 = Promise.resolve('step3');

// Note: All promises are to be independent, not depended with others to use Promise.all()

// If all promises are resolved, execute then(). Otherwise execute catch()
Promise.all([p1,
        p2,
        p3
    ])
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err)
    })


// If any promise is resolved, execute then()
Promise.race([p1,
        p2,
        p3
    ])
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err)
    })




// Another example of async/await ===============================

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