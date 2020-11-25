// In ES5, we have smth called the module pattern that helps to break up our code 

// Basic Structure 

// Immediately invoked function expression

// (function(){
//     // Declare private vars and functions 

//     return {
//         // Declare public var and functions

//     }
// })();

// STANDARD MODULE PATTERN 
const UICtrl = (function(){
    let text = 'hello world';

    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;

    }

    return {
        // what we return is gonna be public
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    }
})();


UICtrl.callChangeText();

