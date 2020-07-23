// Getting web page data (html document)
console.log(document);
// Getting document object data
console.dir(document);

// Call various elements through document
let value = document;
// value = window.document;
value = document.head;
value = document.body;
value = document.body.className;
value = document.body.id;
value = document.all; // All nodes (return array-like object)
value = document.all[5]; // <title>Product List</title>
value = document.title; // Product List
value = document.links; // like array
value = document.links[0]; // <a href="">Pant</a>
value = document.links[0].getAttribute("href");
value = document.characterSet; // UTF-8
value = document.forms; // HTMLCollection [form.product-form]
value = document.forms[0]; // <form action method="POST" class="product-form">…</form>
value = document.forms[0].action; // "file:///E:/web-projects/JavaScriptSeries/DOM/index.html"
value = document.forms[0].method; // "post"
value = document.scripts; // HTMLCollection(4) [script, script, script, script]

console.log(value);

function sayHi() {
    console.log('Hi')
}
sayHi();
window.sayHi();

// setTimeout is also attached with window object
setTimeout(() => {
    console.log('hi')
}, 3000)

// Accessing elements
var val = document.getElementById('container');
val = document.getElementsByClassName('container');
val = document.getElementsByClassName('container')[0];

val = document.getElementsByTagName('li');
// HTMLCollection(5) [li.product-collection-item, li.product-collection-item, li.product-collection-item, li.product-collection-item, li.product-collection-item]
val = document.getElementsByTagName('li')[2];
val = document.getElementsByTagName('a'); // HTMLCollection(2) [a, a]
val = document.getElementsByTagName('a')[1];

// https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048
// Accessing first item if more than one
val = document.querySelector('html');
val = document.querySelector('.product-collection-item'); // return first item
val = document.querySelector('#container');

// Accessing all the items
val = document.querySelectorAll('.product-collection-item'); // NodeList(5)
val = document.querySelectorAll('.product-collection-item')[1];
val = document.querySelectorAll('a')[1];
val = document.querySelectorAll('ul li a'); // NodeList [a]
val = document.querySelectorAll('ul li a')[0];


val = document.getElementsByClassName('product-collection-item');

console.log(val);

for (let i = 0; i < val.length; i++) {
    console.log(val[i]);
}

for (let i of val) {
    console.log(i);
}

// In HTML collection, Array conversion must be done if forEach method is applied
val = Array(val);
val.forEach(node => console.log(node))

val = document.querySelectorAll('.product-collection-item');
console.log(val)

for (let i in val) {
    console.log(i, val[i]);
}