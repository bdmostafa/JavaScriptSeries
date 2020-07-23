// Event Bubbling (child to parent) =================================
// const li = document.querySelector('li');
// const ul = document.querySelector('ul');
// const container = document.querySelector('.container');

// li.addEventListener('click', () => {
//     console.log('clicked li')
// })

// ul.addEventListener('click', () => {
//     console.log('clicked ul')
// })

// container.addEventListener('click', () => {
//     console.log('clicked container')
// })

// // Event Delegation (parent to child) ===========================
// // If any element under container, it executes
// container.addEventListener('dblclick', event => {
//     // parent to child effect. An element under container is double-clicked, it results
//     console.log(event.target);
//     // Any other element does not effect without target id
//     if (event.target.id === 'delegationSample') {
//         event.target.classList.add('delegationSample');
//     }
// })

// In practice =================================
const ul = document.querySelector('ul');
const form = document.forms[0];
const inputForm = document.getElementById('productName');

function eventInfo(event) {
    event.preventDefault();
    console.log('Type: ', event.type);
    console.log('Target: ', event.target);
    const li = document.createElement('li');
    li.textContent = inputForm.value;
    li.className = 'product-collection-item';
    ul.appendChild(li);
    inputForm.value = '';
}

ul.addEventListener('click', event => {
    if (event.target.className === 'product-collection-item') {
        console.log(event.target);
        event.target.parentNode.removeChild(event.target);
    }
})
form.addEventListener('submit', eventInfo);