const btn = document.getElementById('btn');
btn.addEventListener('click', loadData);

function loadData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // console.log('state', this.readyState);
        // console.log('status', this.status);

        if (this.readyState === 4 && this.status === 200) {
            // console.log('everything is ready');
            // console.log(xhttp.responseText);
            document.getElementById('data').textContent = this.responseText;
        }
    }


    xhttp.open('GET', './ajax.txt', true);
    xhttp.send();
}