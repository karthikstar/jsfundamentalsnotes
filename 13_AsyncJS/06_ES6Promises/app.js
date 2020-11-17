// Promises is an alternative to callbacks
// its an alternate way of handling asynchronous operations 

// ALTERNATIVE TO CALLBACKS


const posts = [
    {title:'Post One', body:'this is post 1'},
    {title:'Post two', body:'this is post 2'},
];

function createPost(post){
    return new Promise(function(resolve,reject){
        // resolve is what we want to call when we r done w what we r doing, reject when we want to throw some error
        setTimeout(function(){
            posts.push(post);

            const error = false;
            if (!error){
                resolve();  

            } else {
                reject('Error : Something went wrong!')
            }
        }, 2000);
    

    });

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

createPost({title:'post 3',body:'this is post 3'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});
// impt to have catch statement at the end to catch the error. if theres a error but nocatch statement , it will say uncaught error.
