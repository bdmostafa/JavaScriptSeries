// Basic idea on Promise (fulfill, reject)
let myPromise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 4) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

myPromise
    .then((message) => {
        console.log("'.then()' message is " + message);
    })
    .catch((message) => {
        console.log("'.catch()' message is " + message); // '.catch()' message is Failed
    });

// Pending (setTimeout()), fulfill (resolve(), then()), reject (reject(), catch())
let learnComplete = true;

let learnJS = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (learnComplete) {
            resolve("ECMAScript learning completed");
        } else {
            reject("ECMAScript learning not completed");
        }
    }, 3 * 1000);
});


// Consuming a Promise: then, catch, finally methods
function startLearn() {
    console.log("Create an account and enjoy learning!");
}

learnJS
    .then((success) => {
        console.log(success);
    })
    .catch((reason) => {
        console.log(reason);
    })
    .finally(() => {
        startLearn(); // finally() executes whether the promise is fulfilled or rejected
    });

// Callback, errorCallback functions ====================================
const userJoin = true;
const userWatchingMovie = true;

function watchMoving(callback, errorCallback) {
    if (userJoin && userWatchingMovie) {
        callback({
            name: "User joined.",
            message: "Enjoy the movie :(",
        });
    } else if (userJoin && !userWatchingMovie) {
        callback({
            name: "User joined.",
            message: "Just joined now but not watching movie!",
        });
    } else {
        errorCallback("Welcome to our site...");
    }
}

watchMoving(
    (message) => {
        console.log(message.name + " " + message.message);
    },
    (error) => {
        console.log(error);
    }
);

// Transfer callback function into Promise object ==========================
function watchMovingPromise() {
    return new Promise((resolve, reject) => {
        if (userJoin && userWatchingMovie) {
            resolve({
                name: "User joined.",
                message: "Enjoy the movie :(",
            });
        } else if (userJoin && !userWatchingMovie) {
            resolve({
                name: "User joined.",
                message: "Just joined now but not watching movie!",
            });
        } else {
            reject("Welcome to our site...");
        }
    });
}

watchMovingPromise()
    .then((message) => {
        console.log(message.name + " " + message.message);
    })
    .catch((error) => {
        console.log(error);
    });

// Async/ Await function with Promise object =========================
function asyncTask(i) {
    return new Promise((resolve) => resolve(i + 1));
}
async function runAsyncTasks() {
    const response1 = await asyncTask(0);
    const response2 = await asyncTask(response1);
    const response3 = await asyncTask(response2);
    return "Everything done";
}
runAsyncTasks().then((result) => console.log(result)); // "Everything done" returns when every tasks are completed

// Promise without Async ================================
function runAsyncTasksPromise() {
    return asyncTask(0)
        .then((response1) => {
            return asyncTask(response1);
        })
        .then((response2) => {
            return asyncTask(response2);
        })
        .then((response3) => {
            return asyncTask(response3);
        })
        .then((response4) => {
            return "Everything done asynchronously";
        });
}

runAsyncTasksPromise().then((result) => {
    console.log(result);
});

// Promise.all() ====================================
const promiseOne = Promise.resolve(11); // Promise.resolve(value)
const promiseTwo = new Promise((resolve, reject) => {
    resolve("Promise two done");
});
const promiseThree = 99;
const promiseFour = new Promise((resolve, reject) => {
    // One structure for setTimeout ===================
    //   setTimeout(() => {
    //     resolve("Promise four done");
    //   }, 500);

    // Another structure =========================
    //   setTimeout(
    //     () => {
    //       resolve;
    //     },
    //     500,
    //     "Promise four done"
    //   );

    setTimeout(resolve, 500, "Promise four done"); // Single line structure
});

Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then((values) => {
    console.log(values);
});

// Promise.race() ======================
const promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 300, "one");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // Both resolve, but promiseTwo is faster and output is "two"
});

// Simple promise resolve within a given time in the async function
const timeLimit = (t) => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve(`Finished within ${t}`);
        // }, t);

        setTimeout(resolve, t, `Finished within ${t}`); // Same as above code
    });
};

timeLimit(300).then((result) => console.log(result));
// Finished within 300

Promise.all([timeLimit(100), timeLimit(200), timeLimit(300)]).then((result) =>
    console.log(result)
);
// [ 'Finished within 100', 'Finished within 200', 'Finished within 300' ]
// The output is consoled as an array only after resolving all the promises chronologically

const timeSlots = [1000, 2000, 3000];
const promises = [];

// Mapping the timeSlots
timeSlots.map((duration) => {
    // Pushing the pending promise to the array promises
    promises.push(timeLimit(duration));
});

console.log(promises); // To check the pending status on promises
// [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]

// Now passing the 'promises' pending array to Promise.all
Promise.all(promises).then((result) => console.log(result));
// [
//   'Finished within 1000',
//   'Finished within 2000',
//   'Finished within 3000'
// ]
// Promise.all results after all the promises are resolved

// What happens if any of the promises is rejected?!
const timeEnd = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (t === 1000) {
                reject(`Rejected in ${t}`);
            } else {
                resolve(`Finished in ${t}`);
            }
        }, t);
    });
};

const tValues = [500, 1000, 1500];

const promisesArray = [];

tValues.map((time) => {
    promisesArray.push(timeEnd(time));
});

console.log(promisesArray);
// (node:8528) UnhandledPromiseRejectionWarning: Rejected in 1000
// (node:8528) UnhandledPromiseRejectionWarning: Unhandled promise rejection.

// Now passing pending promisesArray to Promise.all
Promise.all(promisesArray)
    .then((result) => console.log(result)) // Promise.all not resolved and because of one rejecting, all the rest of the promises fail
    .catch((err) => console.log(`Error throws in ${err}`)); //Returns "Error throws in Rejected in 1000"

// To handle this error for each promise, have to return catch function inside promiseArr out of Promise.all before passing to it(Promise.all)
const promiseArr = tValues.map((time) => {
    return timeEnd(time).catch((err) => err);
});

Promise.all(promiseArr)
    .then((result) => console.log(result))
    .catch((err) => console.log(`Error throws in ${err}`));
//  [ 'Finished in 500', 'Rejected in 1000', 'Finished in 1500' ]

// try{}, catch{}, finally{}, throw - Error Handling ======================
try {
    console.log("try starting...");

    funcTry; // funcTry is not defined

    console.log("try ended."); // It is never reached
} catch (err) {
    console.log("Error found: " + err.stack); // .stack is used to find the error details
} finally {
    console.log("finally always runs...");
}
console.log("This is out of tray, catch, finally and continue next...");
/*
try starting...
Error found: ReferenceError: funcTry is not defined
    at Object.<anonymous> (E:\JavaScript\ES6\main.js:823:3)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
finally always runs...
This is out of tray, catch, finally and continue next...
*/




// Async function to send bulk emails to a list of users
// Creating batch of specific number of users at a time to handle huge nummber of HTTP connection that happens server down

// Main logic is: ================================
// for (let i = 0; i < 50000; i += 1) {
//   sendEmailToUsers(user[i]); // Async operation to send a email
// }

const sendingEmailtoUser = () => {
    // ...Sending email per user
};

const sendEmailToUsers = async (users) => {
    const usersLength = users.length;

    // The batch size is 500
    for (let i = 0; i < usersLength; i += 500) {
        const userBatch = users.slice(i, i + 500).map((user) => {
            return sendingEmailtoUser(user).catch((err) =>
                console.log(`Error in sending email for ${user} - ${err}`)
            );
        });

        // userBatch will have 500 or less pending promises then sending to Promise.all
        await Promise.all(userBatch).catch((err) =>
            console.log(`Error in sending email for the batch ${i} - ${err}`)
        );
    }
};

sendEmailToUsers(userLists);

// Function to fetch Github info of a user =================================
const fetchGithubInfo = async (url) => {
    console.log(`Fetching ${url}`);
    const githubInfo = await axios(url); // API call to get user info from Github.
    return {
        name: githubInfo.data.name,
        bio: githubInfo.data.bio,
        repos: githubInfo.data.public_repos,
    };
};

// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) => {
    const requests = names.map((name) => {
        const url = `https://api.github.com/users/${name}`;
        return fetchGithubInfo(url) // Async function that fetches the user info.
            .then((a) => {
                return a; // Returns the user info.
            });
    });
    return Promise.all(requests); // Waiting for all the requests to get resolved.
};

fetchUserInfo(["mostafabd", "bdmostafa"]).then(
    (a) => console.log(JSON.stringify(a)) // Returns as JSON mode
);
/*
[{
  "name": "Mostafa Al Mahmud",
  "bio": "Full-stack Engineer ... Node.js, Vue.js, Python ",
  "repos": 500
}, {
  "name": "Shams",
  "bio": "Realtime App builder",
  "repos": 259
}]
*/