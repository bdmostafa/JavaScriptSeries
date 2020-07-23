// Creating Element ================
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.className = 'product-collection-item';
// li.innerText = 'My Item';
li.appendChild(document.createTextNode('My item'));
ul.appendChild(li);
// ul.prepend(li);
console.log(ul);


// Replacing Element ================
const preHeading = document.querySelector('h2');
const newHeading = document.createElement('h2');
newHeading.appendChild(document.createTextNode('Product List (updated)'));

// const parentHeading = document.querySelector('.container');
// parentHeading.replaceChild(newHeading, preHeading);

// Without parentHeading - .replaceWith method
preHeading.replaceWith(newHeading)

console.log(newHeading)