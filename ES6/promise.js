const processData = () => {
    setTimeout(() => {
        console.log(1); // after 1 second
        setTimeout(() => {
            console.log(2); // after 2 second
            setTimeout(() => {
                console.log(3); // after 3 second
            }, 1000);
        }, 1000);
    }, 1000);
}
processData();

// To handle this bad practice, Promise is used
const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        reject(Error('Error...'));
    }, 1000);
});
console.log(promiseData);

promiseData.then(data => {
    console.log(data);
}).catch(error => console.log(error));


// Chain in promise
const pData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            reject(Error('Error...'));
        }, 1000);
    });
}

const anotherPData = (anotherData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(anotherData + 1);
            reject(Error('Error...'));
        }, 1000);
    });
}

pData(10).then(data => {
    console.log(data); // 10

    anotherPData(data)
        .then(anotherData => console.log(anotherData)) // 11
        .catch(e => console.log(e));

}).catch(error => console.log(error));

// Another way (return)
pData(10).then(data => {
        console.log(data); // 10

        return anotherPData(data)

    }).then(anotherData => console.log(anotherData)) // 11
    .catch(e => console.log(e));