const btnAjax = document.getElementById('btn-ajax');
btnAjax.addEventListener('click', loadDataByAjax);

function loadDataByAjax() {
    // Instantiate constructor function
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // console.log('state', this.readyState);
        // console.log('status', this.status);

        // To check if everything is okay
        if (this.readyState === 4 && this.status === 200) {
            // console.log('everything is ready');
            // console.log(xhr.responseText);
            document.getElementById('data').textContent = JSON.parse(this.responseText);
            console.log(this.responseText); // as json data
            const data = JSON.parse(this.responseText);
            console.log(data); // as string object

            let displayData = [];
            for (let i = 0; i < data.length; i++) {
                displayData.push(`Name: ${data[i].name},
                Age: ${data[i].age},
                Profession: ${data[i].profession}`)

            };
            document.getElementById('data').textContent = displayData;
        }
    }

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    // xhr.open('GET', './ajax.txt', true);
    xhr.open('GET', './sample.json', true)
    xhr.send();
}


// Fetch API practice instead of XMLHTtpRequest
document.getElementById('btn-fetch').addEventListener('click', loadDataByFetch)

// function loadDataByFetch() {
//     fetch('./sample.json')
//         .then(data => data.json())
//         .then(data => console.log(data))
// }

// Using async/await
async function loadDataByFetch() {
    const results = await fetch('./sample.json')
        .then(data => data.json());
    console.log(results);
}