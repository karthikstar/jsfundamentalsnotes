// document is part of the window object


let val;

val = document; // gives the entire document
val = document.all; // html collection of entire document, is basically a array of elements inside the html file

val = document.all[2]; // <meta charset = "UTF-8" >
val = document.all.length; // 43 elements in the DOM

val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType; // text/html

// ways to select elements without using Selectors 
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method; // forms have methods like get and post 
val = document.forms[0].action;

val = document.links; // shows a collection of links (a elements)
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className; // gives string of classes
val = document.links[0].classList[0]; // classList gives list of 2 classes, theres one class at index 0 , one class at index 1.

val = document.images;

val = document.scripts[2].getAttribute('src');
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts); // converts collection into an array

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
}); // loops thru the scrips Arr 

console.log(val);