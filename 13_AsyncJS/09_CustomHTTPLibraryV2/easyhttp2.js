// version 2 of easyhttp library using es6 technologies like fetch & promises

/**
 * Easy HTTP Library
 * Library for making HTTP requests
 * @version 2.0.0
 * @author Karthik
 * @license MIT
 */


// Synchronous way
//  class EasyHTTP {
//     //  Make an HTTP GET request
//     get(url){
//         fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
//     }
//  }

//  do in asynchronous way?
class EasyHTTP {
    //  Make an HTTP GET request
    get(url){

        return new Promise ((resolve,reject) => { // wrap the whole fetch in a promise
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data)) // call resolve when we want to send a response and reject when we want to send an error.
            .catch(err => reject(err))
        });

    }

    // Make an HTTP POST Request
    post(url,data){

        return new Promise ((resolve,reject) => { // wrap the whole fetch in a promise
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data)) // call resolve when we want to send a response and reject when we want to send an error.
            .catch(err => reject(err))
        });

    }

        // Make an HTTP PUT Request
        put(url,data){

            return new Promise ((resolve,reject) => { // wrap the whole fetch in a promise
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data)) // call resolve when we want to send a response and reject when we want to send an error.
                .catch(err => reject(err))
            });
    
        }

        // Make an HTTP DELETE Request

        delete(url){

            return new Promise ((resolve,reject) => { // wrap the whole fetch in a promise
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(() => resolve('Resource deleted')) // its not gonna send back data as its jus gonna be empty obj hence we send this string.
                .catch(err => reject(err))
            });
    
        }
 }

//  made using fetch, arrow functions , promises



