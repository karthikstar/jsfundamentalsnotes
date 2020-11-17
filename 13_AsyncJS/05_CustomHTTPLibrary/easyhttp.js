// This will be our http library
// app.js will be used to test this library

function easyHTTP(){
    this.http = new XMLHttpRequest();
    
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET',url, true);
    
    let self = this; // capture the this in this scope.

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText); // error is the first param , 2nd param is the response.

        // when we are inside a fn, the this keyword pertains to the function.
        // arrow functions (es6) fix this problem by adding a lexical this.

        // a fix in es5 is that we need to declare self on top which pts to easyHTTP object.

        } else {
            callback('Error: ' + self.http.status);
            
            // Why there is no second argument passed that would correspond to "posts"?
            
            // If the function is called on error, then it will look for the related argument which happens to be the first one. It will find a value there and proceed in execution. It does not need the data argument (which is logical since there is no data, an error occured and we could not retrieve any).

            // So data is a null, which we can omit (or not, you can try and add a null value as a second argument, I guess there will be no issue).

            // On the contrary, in case of success, it will be looking for the second argument, in this scenario the use of null as a first argument is mandatory.

        }
    }

    this.http.send();
}
// Make an HTTP POST request

easyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);

    this.http.setRequestHeader('Content-type','application/json');

    let self = this; // capture the this in this scope.

    this.http.onload = function(){
        callback(null,self.http.responseText);

    }


    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT request

easyHTTP.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);

    this.http.setRequestHeader('Content-type','application/json');

    let self = this; // capture the this in this scope.

    this.http.onload = function(){
        callback(null,self.http.responseText);

    }


    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE request

easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE',url, true);
    
    let self = this;

    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'Post Deleted'); 

        } else {
            callback('Error: ' + self.http.status);

        }
    }

    this.http.send();
}