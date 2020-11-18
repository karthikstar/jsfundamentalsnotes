// Async Await - NEW - part of es7/es2016 standard


// async function myFunc(){

//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('hello'),1000)
//     });
//     const error = false ;

//     if (!error){
//         const res = await promise; // wait until promise is resolved.
//         return res;
//     } else {
//         await Promise.reject(new Error('something went wrong'));
//     }


// }
// // just by adding the word async infront of function, it causes it to return a promise


// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


async function getUsers(){
    // await response of the fetch call
    // fetch gives a promise fyi.
    
    const response = await fetch('http://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    // instead of using .then(),we can do the following
    const data = await response.json();
    // only proceed once second promise is resolved.

    return data;

}


getUsers().then(users => console.log(users))

