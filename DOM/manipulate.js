val = document.querySelector('.product-collection-item');

val.style.color = 'red';
val.style.backgroundColor = '';
val.textContent = 'Computer';
val.innerText = 'Laptop';
val.innerHTML = "<strong>Laptop</strong>"

// val = document.querySelector('a').getAttribute('href')
// val = document.querySelectorAll('a')[1].getAttribute('href')

// val = document.querySelectorAll('a')[1].setAttribute('href', 'https://google.com')

// val = val.className;
// val.className = 'myNewClass';

// val = val.classList;
val.classList.add('myNewClass');

console.log(val)