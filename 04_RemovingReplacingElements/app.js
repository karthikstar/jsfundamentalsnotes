// REPLACE ELEMENT

// Create Element 
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

console.log(newHeading)

// get the old heading
const oldHeading = document.getElementById('task-title');

// Parent 
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element 
const lis = document.querySelectorAll('li');

const list = document.querySelector('ul');

// Remove specific list item 
lis[0].remove();

// Remove Child element 
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className; // gives del-item sec content
val = link.classList; // gives an array of classes
val = link.classList[0] // delete-item

link.classList.add('test');
link.classList.remove('test');

val = link;





// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // true
val = link.hasAttribute('title'); // false

link.setAttribute('title','Google');
link.removeAttribute('title');

val = link


console.log(val);

