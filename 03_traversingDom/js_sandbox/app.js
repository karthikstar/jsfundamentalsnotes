// Traversing the DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// // Get child nodes
val = list.childNodes; // will show text, li , text, li - why? because after every list element theres a line break. this counts as a text!
// gives NodeList containing 11 elements


val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // 3 - text node
val = list.childNodes[1].nodeType; // 1 - element

// REFER TO THESE NUMBERS which will tell us what type of node they are.
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// MORE COMMON METHOD
// Get children element nodes
val = list.children; // will give a HTML collection of 5 elements. 

val = list.children[1];
list.children[1].textContent = 'Hello';
// // Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild; // gives text node
val = list.firstElementChild;

// // Last child
val = list.lastChild; // gives text node 
val = list.lastElementChild; // gives the actual last list item

// // Count child elements
val = list.childElementCount;

// // Get parent node
val = listItem.parentNode; // parent of li element is the ul 
val = listItem.parentElement; // same exact thing
val = listItem.parentElement.parentElement; // parent of ul element

// Get next sibling
val = listItem.nextSibling; // this deals w other types of nodes , not just elements . hence next node will be text node
val = listItem.nextElementSibling;

// Get previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // gives null as theres no previous sibling before the first li element

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

    
console.log(val);

// Creating Elements

// we can construct DOM elements from scratch using vanilla js
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add an id
li.id = 'new-item';

// Add attribute
li.setAttribute('title','New Item');

// Create text node and append

li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes 

link.className = 'delete-item secondary-content';

// Add icon html 
link.innerHTML = '<i class = "fa fa-remove"></i>';

// append link into li 
li.appendChild(link);

// Append li as child to ul 

document.querySelector('ul.collection').appendChild(li);

console.log(li);

