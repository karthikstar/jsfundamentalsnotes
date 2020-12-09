// importing in http and ui modules
import { http } from './http'; // importing easy http library that we created in earlier project
import {ui} from './ui';

// event listeners
// Get posts on DOM Load

document.addEventListener('DOMContentLoaded',getPosts);

document.querySelector('.post-submit').addEventListener('click',submitPost);

// listen for delete
document.querySelector('#posts').addEventListener('click',deletePost);

// Listen for Edit State
document.querySelector('#posts').addEventListener('click',enableEdit);

// Listen for Cancel Edit
document.querySelector('.card-form').addEventListener('click',cancelEdit)

// Get posts
function getPosts(){
    // console.log('yes')
    http.get('http://localhost:3000/posts') // pass in the url we want to make a request to
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
};

// Submit post - this function will get triggered during 2 scenarios : 1. Adding new Post 2. Update existing post
function submitPost(){
    // Get the form data
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;
    
    const data = {
        title,
        body
    }
    // Validate Input - make sure both title and body fields are complete
    if(title === '' || body === ''){
        ui.showAlert('Please fill in all fields','alert alert-danger')
    } else {
        // Check for ID
        if(id === ''){
            // means this is a add state
            // Create Post
                   
            // Create Post
            http.post('http://localhost:3000/posts', data)
            .then(data => {
                //after successful post req, call getPosts to get the posts inlcuding the one we just added
                ui.showAlert('Post added','alert alert-success');
                ui.clearFields();
                getPosts();
            })
            .catch(err => console.log(err));
        } else {
            // Means this is a UPDATE state,
            // Update Post
                   
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                //after successful post req, call getPosts to get the posts inlcuding the one we just added
                ui.showAlert('Post updated','alert alert-success');
                ui.changeFormState('add');
                getPosts();
            })
            .catch(err => console.log(err));

            }

    }

};


// delete Post

function deletePost(e){
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;
        if(confirm('Are you sure?')){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert('Post Removed', 'alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err))
        }
    }
    e.preventDefault();
}

// Enable Edit State
function enableEdit(e){
    // console.log(e.target)
    if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        const data = {id,title,body}

        // Fil form with current post
        ui.fillForm(data);

    }

    e.preventDefault()
}

// Cancel edit State
function cancelEdit(e){
    if(e.target.classList.contains('post-cancel')){
        ui.changeFormState('add');
    }

    e.preventDefault();
}