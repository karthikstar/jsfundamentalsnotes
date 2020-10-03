const form = document.querySelector('form');

const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// let the form listen for submit Event
// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent); // fires off when a key is pressed

// Keyup
// taskInput.addEventListener('keyup', runEvent); // when we release the key it fires off

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent); // when u click the input

// Blur
taskInput.addEventListener('blur', runEvent); // whenm u click outside the input

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent); // fired off when we paste smth in the input

// Input
taskInput.addEventListener('input', runEvent); // fires off when u type something into the input, or cut or paste, aka anythn we do w the input.

// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value); // target is the element in which the event happened on

  heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault(); // prevent the page from redirecting - usually when using submit u would wanna use this
}