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
    // DOM Load event - event that gets called right aftrer the DOM is loaded.
    document.addEventListener('DOMContentLoaded',getTasks);

    // Add Task event listener

    form.addEventListener('submit',addTask)

    // remove task event
    taskList.addEventListener('click', removeTask);

    // Clear Task event
    clearBtn.addEventListener('click',clearTasks);

    // Filter tasks event
    filter.addEventListener('keyup',filterTasks);
}

// Get Tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    
    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');

        // add a class
        li.className = 'collection-item';
        // create text node and append to li

        li.appendChild(document.createTextNode(task));
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
    });
}

//Add Task 
function addTask(e){
    if (taskInput.value === ''){
        alert('add a task!')
    } else {

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
    
    // Store in Local Storage

    storeTaskInLocalStorage(taskInput.value);

    // clear input 
    taskInput.value = '';
    }
    
    e.preventDefault();


}

// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // adding on to the tasks array
    tasks.push(task);
    // set this modified array back to the local storage
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }

    // Remove task from LocalStorage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)

}
// Remove from Local Storage
function removeTaskFromLocalStorage(taskItem){
    // console.log(taskItem);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index,1);

        } // check to see if the text content of the selected element to remove matches the current iteration of tasks in local storage.
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));

}


// Clear Tasks

function clearTasks(){
    // taskList.innerHTML = '';
    // Faster operation method - check brlow link!

    // https://jsperf.com/innerhtml-vs-removeChild

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    } // while theres still a firstchild aka theres still smth in the list then remove the li element
    
    // Clear from LS 
    clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    // console.log(text);
    // query selector returns a node list which we can loop thru unlike getelementsby which gives a html collection whiuch has to be converted into an array first.

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            // indexOf method searches for the text inside each of the li elemenets. if theres no match then it will return -1. hence if its not minus 1 means theres a match.
            if(item.toLowerCase().indexOf(text) != -1 ){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';

            }
        }
    );
}
