const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);


// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);


// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter - if mouse goes to the card
// card.addEventListener('mouseenter', runEvent);


// Mouseleave - if the cursor leaves the card
// card.addEventListener('mouseleave', runEvent);

// Mouseover
// card.addEventListener('mouseover', runEvent);

// Mouseout
// card.addEventListener('mouseout', runEvent);

// Whats the diff btwn Mouseover,Mouseout vs Mouseenter,MouseLeave ?
// mouseover gets fired off whenever i go to another element within the main element to which the event listener is added


// Mousemove - ANY movement inside the element fires off the event

card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}