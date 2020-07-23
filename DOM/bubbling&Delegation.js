// Event Bubbling (child to parent) =================================
const li = document.querySelector('li');
const ul = document.querySelector('ul');
const container = document.querySelector('.container');

// li.addEventListener('click', () => {
//     console.log('clicked li')
// })

// ul.addEventListener('click', () => {
//     console.log('clicked ul')
// })

container.addEventListener('click', () => {
    console.log('clicked container')
})

// Event Delegation (parent to child) ===========================
// If any element under container, it executes
container.addEventListener('dblclick', event => {
    // parent to child effect. An element under container is double-clicked, it results
    console.log(event.target);
    // Any other element does not effect without target id
    if (event.target.id === 'delegationSample') {
        event.target.classList.add('delegationSample');
    }
})