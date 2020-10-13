// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners 

loadEventListeners();


// Load all event listeners 

function loadEventListeners(){
    // Add Task event listener

    form.addEventListener('submit',addTask)

    // remove task event
    taskList.addEventListener('click', removeTask);

    // Clear Task event
    clearBtn.addEventListener('click',clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup',filterTasks);
}



//Add Task 
function addTask(e){
    if (taskInput.value === ''){
        alert('add a task!')
    }
    // Create li element
    const li = document.createElement('li');

    // add a class
    li.className = 'collection-item';
    // create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element (X)
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content'; // we need the seconary content class in materialize in order to have something on the right 

    // add icon html 
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append the link to li
    li.appendChild(link);

    // append li to the ul 
    taskList.appendChild(li);
    // clear input 
    taskInput.value = '';

    e.preventDefault();


}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks

function clearTasks(){
    // taskList.innerHTML = '';
    // Faster operation method - check brlow link!

    // https://jsperf.com/innerhtml-vs-removeChild

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    } // while theres still a firstchild aka theres still smth in the list then remove the li element
    
}

// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    // console.log(text);
    // query selector returns a node list which we can loop thru unlike getelementsby which gives a html collection whiuch has to be converted into an array first.
    
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1 ){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';

            }
        }
    );
}
