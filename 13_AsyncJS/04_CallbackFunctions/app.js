// Callback functions - simply a function that is passed as a parameter to another function and is ran inside the function body

// function inside forEach is a callback although its synchronous
// setTimeout - takes in a callback fn which is asynchronous


// note: theres synchronous and async callbacks


// 1. WITHOUT USE OF CALLBACKS
// const posts = [
//     {title:'Post One', body:'this is post 1'},
//     {title:'Post two', body:'this is post 2'},
// ];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;

//     }, 1000);
// }

// createPost({title:'post 3',body:'this is post 3'});

// getPosts();

// both fns will run asynchronous, but getPosts will give output first in 1s, and at 2s then only new post is created

// 2. Using callbacks

const posts = [
    {title:'Post One', body:'this is post 1'},
    {title:'Post two', body:'this is post 2'},
];

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    }, 1000);
}

createPost({title:'post 3',body:'this is post 3'}, getPosts);