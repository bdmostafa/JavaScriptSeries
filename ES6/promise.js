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