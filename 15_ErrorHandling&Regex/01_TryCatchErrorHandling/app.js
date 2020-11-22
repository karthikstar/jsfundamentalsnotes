const user = {email:'jdoe@gmail.com'};

try {
    // Produce a referenceError as we dont have such a function
    // myFunction();

    // Produce a Type Error
    // null.myFunction();



    // Will produce syntax error
    // console.log(eval('2 + 2'));
    // eval('hello world')
    
    // Will produce URI error
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'user has no name!!';
        
        throw new SyntaxError('user has no name')
    }

    
} catch(err) {
    console.log(err);
    console.log(`${err.name} is the error which occured.`)
    // console.log(err); // ref error : my fn is not defined
    // console.log(err.message); // my function is not defined

    // console.log(err.name); // reference error
    // console.log(err instanceof ReferenceError);

} finally {
    console.log('finally runs regardless of result..')
} // no matter what the piece of result finally block will run

// whats rly nice about tryt catch is that we can handle errors without stopping the whole script!

console.log('program continues...')