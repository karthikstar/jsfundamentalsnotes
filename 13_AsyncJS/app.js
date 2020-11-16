document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // Create an XHR Object aka new instance of xhr obj
    const xhr = new XMLHttpRequest();

    // OPEN - whr we specify the type of request we make and the url/file name we want to make it to

    xhr.open('GET','notes.txt',true); // first param is type of req (GET), file tat we are reading in , and 3rd param set to true as we want to do it asynchronously 
    
    console.log('READYSTATE',xhr.readyState); // ready state is 1 - server connection established

    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
    console.log('READYSTATE',xhr.readyState);
    }

// xhr.onload is the function called when a httprequestn transaction completes successfully

    xhr.onload = function(){
        // at this pt, we are already at readyState 4.
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    } 


    // Older method to xhr.onload
    // in this method we actually have to check if readyState is 4.

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE',xhr.readyState) // readystate changes to 2, 3, then 4.

    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('request error ...');
    }

    xhr.send(); // make sure to inc this
   
    // readyState Values
    // 0 : request not intiialised
    // 1: server connection established
    // 2: request received 
    // 3: processing request
    // 4: ruequest finished and response is ready


    // HTTP Statuses
    // 200:"OK"
    // 403:"Forbidden"
    // 404:"Not Found"
}