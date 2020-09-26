//DOM 
// Tree of nodes/elements created by the browser
// JS can be used to read/write/manipulater to the DOM 
// Object Oriented Representation

// browser gives us a window obj and inside that theres a document object

// hence, document is part of the window object


// let val;

// val = document; // gives the entire document
// val = document.all; // html collection of entire document, is basically a array of elements inside the html file

// val = document.all[2]; // <meta charset = "UTF-8" >
// val = document.all.length; // 43 elements in the DOM

// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType; // text/html

// // ways to select elements without using Selectors 
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method; // forms have methods like get and post 
// val = document.forms[0].action;

// val = document.links; // shows a collection of links (a elements)
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className; // gives string of classes
// val = document.links[0].classList[0]; // classList gives list of 2 classes, theres one class at index 0 , one class at index 1.

// val = document.images;

// val = document.scripts[2].getAttribute('src');
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts); // converts collection into an array

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// }); // loops thru the scrips Arr 

// console.log(val);


// DOM Selectors For Single elements
// single element selectors allow us to grab one element by its id or class or wtvr. only stores one thing. if it is used on a class that appears more than once in the DOM it will grab the first instance 
// multiple element selectors will grab all the instances of the class




// document.getElementById()
console.log(document.getElementById('task-title'))

// get things from the element 
console.log(document.getElementById('task-title').id);

console.log(document.getElementById('task-title').className);

// Change styling 
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';

document.getElementById('task-title').style.padding = '5px';
// use the below for things like events, hover then change color or disappear , for dynamic functionality
// document.getElementById('task-title').style.display = 'none';

// Change content 
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'my tasks';

// inserting chunk of html 
document.getElementById('task-title').innerHTML = '<span style = "color:red" >Task List</span>'


const taskTitle = document.getElementById('task-title'); // more efficient to assign a variable to the targeted element

taskTitle.style.background = "#231";

// document.querySelector() - NEW and more powerful 
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5')) // if theres more than one h5 elerment on the page, it will only give the first instance 

document.querySelector('li').style.color = 'red'; // single element selector used

document.querySelector('ul li').style.color = 'blue'; 

// use pseudo classes to target another element instead 

document.querySelector('li:last-child').style.color = 'red'; 
document.querySelector('li:nth-child(3)').style.color = 'yellow'; 
document.querySelector('li:nth-child(4)').textContent = 'hello yo'; 

// targeting odd and even numbered child elements
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



