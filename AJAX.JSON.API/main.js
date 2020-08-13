const btn = document.getElementById('btn');
btn.addEventListener('click', loadData);

function loadData() {
    // Instantiate constructor function
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // console.log('state', this.readyState);
        // console.log('status', this.status);

        // To check if everything is okay
        if (this.readyState === 4 && this.status === 200) {
            // console.log('everything is ready');
            // console.log(xhr.responseText);
            document.getElementById('data').textContent = this.responseText;
        }
    }

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);
    xhr.open('GET', './ajax.txt', true);
    xhr.send();
}