// set local storage item

// DIFF BTWN LOCAL STORAGE & SESSION STORAGE 
// local storage wont be cleared until we manually do so, whears session storage will be cleared once we close the browser

// localStorage.setItem('name', 'John'); // key and value
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth'); // will be cleared from session storage once we end the session

// remove from storage
// localStorage.removeItem('name');

// get from storage 
// const name = localStorage.getItem('name'); // access the key to get the value

// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name,age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  // getting the value of input and assigning it to task.
  let tasks;
  // check if localStorage's tasks key has any value
  
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    // retrieve the tasks from local storage 
  }
  // push the task thats coming thru the form into the tasks array
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks)); // local storage only stores strings so we wrap the tasks array with json.stringify to format the array as a string

  alert('Task saved');

  e.preventDefault(); // stop default behaviour of form
});

const tasks = JSON.parse(localStorage.getItem('tasks')); // accessing the 'tasks' key to get its valuem and parse it to convert to an array.

tasks.forEach(function(task){
  console.log(task);
});