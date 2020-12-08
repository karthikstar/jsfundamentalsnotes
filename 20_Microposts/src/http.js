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
        async get(url){
            const response = await fetch(url);

            const resData = await response.json();

            return resData;
        }


    // Make an HTTP POST Request
    async post(url,data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
         
        };


        // Make an HTTP PUT Request
        async put(url,data){

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            const resData = await response.json();
            return resData;
                             }

        // Make an HTTP DELETE Request

        async delete(url){
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type':'application/json'
                }
            })

            const resData = await 'Resource Deleted';
            return resData;

 }

// This does the same exact thing but thime we are using async await instead of wrapping it inside a Promise.
}

export const http = new EasyHTTP();
