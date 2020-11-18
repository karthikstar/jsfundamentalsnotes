// Arrow functions is a impt feature of es6

// normal way of writing functions 
// const sayHello = function(){
//     console.log('Hello');
// }

// Arrow function 
// const sayHello = () => {
//     console.log('Hello');
// }


// we can make it even more compact into a single line
// one line function does not need braces !
// const sayHello = () => console.log('Hello');

// one line return statement
// const sayHello = () => 'Hello';


// const sayHello = () => {msg:'hello'}
// console.log(sayHello()) // will give undefined instead of a object literal, as its looking at the { } as the function body's opening and closing braces 

// to fix this, all we have to do is wrap the object literal in paranthesis.

// Return object
// const sayHello = () => ({msg:'hello'})

// const sayHello = name => console.log(`hello ${name}`)


// note: if functio only takes in a single parameter, we dont even need the brackets around it. 

// but if we have more than one paranthesis,
// Multiple params need paranthesis.
// const sayHello = (firstName,lastName) => console.log(`hello ${firstName} ${lastName}`)

// sayHello('brad','cook')


// Using arrow functions as callbacks

const users = ['Nathan','John','William'];

// const nameLengths = users.map(function(name){
//     return name.length;
// })

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// })


// shortest

const nameLengths = users.map(name => name.length)

console.log(nameLengths)

// note: in ajax section, we had to use self = this, to capture the this in global scope as the this in function scope refers to the function itself. 
// This wont be a problem using es6 arrow fn as arrow fns use a lexical this so we dont have to worry abt the scope of the fn.

