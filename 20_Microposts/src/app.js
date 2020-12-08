// importing in http and ui modules
import { http } from './http'; // importing easy http library that we created in earlier project
import {ui} from './ui';

// Get posts on DOM Load

document.addEventListener('DOMContentLoaded',getPosts);
document.querySelector('.post-submit').addEventListener('click',submitPost);

// Get posts
function getPosts(){
    // console.log('yes')
    http.get('http://localhost:3000/posts') // pass in the url we want to make a request to
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
};

// Submit post
function submitPost(){
    // Get the form data
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const data = {
        title,
        body
    }
    // Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            //after successful post req, call getPosts to get the posts inlcuding the one we just added
            getPosts();
        })
        .catch(err => console.log(err));
};