// Most common usages are click, mouseover, dblclick, keypress, drag
// https://developer.mozilla.org/en-US/docs/Web/Events

const h2 = document.querySelector('h2');
const li = document.querySelector('li');
const lists = document.querySelectorAll('li');
const form = document.forms[0];
const inputForm = document.getElementById('productName');

function eventInfo(evt) {
    // to avoid error
    evt.preventDefault();
    if (!form.addEventListener) {
        console.log(evt)
        console.log('type', evt.type)
        console.log('target', evt.target)
        console.log('target value', evt.target.innerText)
        console.log('offsetX', evt.offsetX)
        console.log('offsetY', evt.offsetY)
        console.log('clientX', evt.clientX)
        console.log('clientY', evt.clientY)
        console.log('clicked H1')
    } else {
        console.log(evt)
        console.log('type', evt.type)
        console.log('target', evt.target)
        console.log('target value', inputForm.value)
    }

}

h2.addEventListener('click', eventInfo)
li.addEventListener('click', eventInfo)
lists.forEach(li => {
    li.addEventListener('click', eventInfo)
})
form.addEventListener('submit', eventInfo)