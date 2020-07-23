// Getting web page data
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

// console.log(value);

function sayHi() {
    console.log('Hi')
}
sayHi();
// window.sayHi();

// setTimeout is attached with window object
setTimeout(() => {
    console.log('hi')
}, 3000)