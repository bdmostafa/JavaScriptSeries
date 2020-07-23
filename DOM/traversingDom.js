val = document.querySelector('.product-collection');

console.log(val);
// val = val.childNodes; // NodeList(11) [text, li.product-collection-item, ........ text] count empty spaces as text as nodes

// To solve use .children
// val = val.children; // HTMLCollection(5)

// val = val.children.length; // 5
// val = val.children[0].nextSibling; // #text (problem for 'text' counting)

// to solve use .nextElementSibling
// val = val.children[0].nextElementSibling; // Sharee
// val = val.children[0].nextElementSibling.nextElementSibling; // Panjabi

// val = val.children[0].nextElementSibling.nextElementSibling.parentElement;
val = val.children[0].nextElementSibling.nextElementSibling.parentElement.parentElement;

console.log(val);