// Adding Event Listeners


document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');
  // some eleemnts have default behaviour, eg: a form will submit to a page, link will try to redirect to another page hence we shld prevent its default behaviour if we want to see the console log permanently.
 
  e.preventDefault(); // we dont need this if we have # symbol in href of a tag as it will not redirect to another page. 
});

// we can also puyt named functions instead of anonymous functions
// when this event happens, it looks for a function called onClick.
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  console.log('Clicked');

  let val;

  val = e;

//   // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'Hello';

//   // Event type
  val = e.type; // click

//   // Timestamp
  val = e.timeStamp;

//   // Coords event relative to the window
  val = e.clientY; // no of pixels from the top
  val = e.clientX; // no of pixels from the left 

//   // Coords event relative to the button element
  val = e.offsetY; // no of pixels from top of element
  val = e.offsetX; // no of px from left side of element

  console.log(val);
}