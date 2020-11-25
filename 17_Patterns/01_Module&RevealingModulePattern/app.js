// In ES5, we have smth called the module pattern that helps to break up our code 
// es2016 introduced actual modules in jaavascript which means that we can use sep files to export modules which are custom pieces of code and import them into a file - however its not supported on browsers yet, and we need to use babel and webpack to support it

// In Es5, we have smth called module patterns that allow us to break parts of code into self contained modules w private properties and methods.


// Basic Structure 

// Immediately invoked function expression (IIFY)

// const hello = (function(){
//     // Declare private vars and functions 
        
        // function greeting () {

        // }

//     return {
//         // Declare public var and functions
//          sayHello : greeting 
//     }
// })();
// hello.sayHello() allows us to access the private variables inside the fn even after it has been executed


// STANDARD MODULE PATTERN 
const UICtrl = (function(){
    // anything we declare here is private.
    let text = 'hello world';

    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;

    }

    // both of the above are PRIVATE - we cannot access them from outside of the uictrl module

    // STANDARD MODULE PATTERN
    return {
        // whatever we return here is gonna be public
        callChangeText: function(){
            // we can access the private variables and private functions from within this public functions
            changeText();
            console.log(text);
        }
    }
})();


UICtrl.callChangeText(); // can access the public function, which can get access to the private vars/fns

// UICtrl.changeText() - wont work as we cannot access private function from outside 
// console.log(UICtrl.text); - undefined


// REVEALING MODULE PATTERN 
// main diff is that instead of returning our own public function, we basically map an obj literal to private functions that we want to reveal

const ItemCtrl = (function(){
    let data = []; // we can label as _data to denote its a private var

    function add(item){
        data.push(item);
        console.log('item added');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });

    }

    return {
        add:add,
        get:get
        // these make the above functions public by "revealing" them
        // if u comment one of the methods , it becomes private.

    }


})();

ItemCtrl.add({id:1,name:'john'});
ItemCtrl.add({id:2,name:'tim'});

console.log(ItemCtrl.get(1));

// as u can see, revealing module pattern looks cleaner but the standard module pattern is beneficial in the sense that we can do more than one action when we call UICtrl.callChangeTexT(). if we wanted to do it in revealing mod pattern we wld have needed to put console.log(text) as another private method in uictrl.