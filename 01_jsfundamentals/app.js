// JS FUNDAMENTALS 
// 1. Using the console
// single line comments
// log to console
console.log('hello world');
console.log(1235);
console.log(true);
var greeting = "hello";
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({a:1,b:2,c:3});
console.table({a:1,b:2,c:3}); // prints the key and value as a table

console.error('this is some error');// shows in red in google browser console
console.clear();

console.warn('this is a warning');

console.time('hello');
    console.log('hello word');
    console.log('hello word');
    console.log('hello word');
console.timeEnd('hello');  // this gives time taken to execute from first hello world log to the 3rd hello world log


/*
multi line comments

*/

// -----------------------------------
// 2. Variables
// variables - 3 ways to definite a var
// var, let (es6), const (es6)

// let and const have a big adv with regards to block level scope
var name = "John";
console.log(name);
name = "Tim"; // can reassign variables if we use var or let
console.log(name); // console will show john, then tim

// Init var
var greeting; // sets it to undefined .
// we often initialise var without setting it a value, when using if statements . if true set greeting to 1, else set greeting to 2. for eg
console.log(greeting);
greeting = "hello";
console.log(greeting);


// rules and conventions in JS
// letters, numbers, _, $ - these are the only characters which can be included in a var name
// cannot start with number
// var 1name = "john" - this is not allowed

var _name = 'john'; // usually underscore used in adv js eg private variables 

// multi word vars
var firstName = 'john'; // camel casing , used widely
var first_name = 'john'; // underscore convetion 
var FirstName = 'Tom' ; // Pascal case - recommended in OOP , when creating constructor functions, classes.
var firstname; // not recommended

// LET - similar to var in global level scope
let name; // can iniutlaise without setting a value
name = "John";
console.log(name);
name = "Tim";  // can reassign
console.log(name); 

CONST - cannot reassign variables

const name = 'john';
console.log(name);
// name = 'Sarah'; // cannot reassign

// MUST Assign a value to const

// const greeting; // cannot initalise this without assigning a value 

const person = {
    name:'John',
    age: 30
}

person.name = 'Sara'; // We can mutate the values stored in the obj , we just cannot REASSIGN person.
person.age = 32;
console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
// hence we can change arrays and objects assigned using const, we just cannot redeclare the variable to a brand new array 
numbers = [2,3,5,2] // this wont work coz we are reassigning the var to a brand new array

// try to use const unless u plan for the value to change, or if i need to initialise it. const gives the signal to others that it shldnt and cannot be reassigned to another primitive value


// --------------------------------------------

// 3. Data Types in Javascript

// 2 types of data types - Primitive and Reference

// Primitive Data Types
// - stored directly in the location  in the variable accesses 
// - stored on the stack
// - string , number , boolean, null , undefined, symbols(es6)


// References Data Types :
// - Accessed by Reference 
// - Objects that are stored on the heap
// - a pointer to a location in memory 
// Arrays, Object Literals, Functions, Dates, anythn else..


// JS is a Dynamically Typed Language
// means that Types are associated w values not variables
// same variable can hold multiple types. a = 1, then later a = "hello"
// dont need to specify types
// most other languages are statically typed (Java, C#, C++) - means that we need to say var int c .. means this var will only hold a int value

// There are supersets of JS and addons to allow static typing(Typescript,Flow)

// PRIMITIVE
// string
const name = 'John';
console.log(typeof name);

// number
const age = 45;
console.log(typeof age);

// boolean
const hasKids = true
console.log(typeof hasKids);

// Null
const car = null; // on browser it shows object- Its a BUG !
console.log(typeof car);

// undefined
let a;
console.log(typeof a);

// symbol
const sym = Symbol();
console.log(typeof sym)

// REFERENCE TYPES - Objects - accessed from memory as a reference
// Array
const hobbies = ['movies','music'];
console.log(typeof hobbies);

//object literal
const address = {
    city : 'bostom',
    state : 'MA'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);

// ----------------------------
// 4. Type conversion

let val;
// 2 ways to convert to string 
// number to string 
val = String(5);
val = String(4+4);
// bool to string
val = String(true);

//date to a string
val = String(new Date());
// Array to string
val = String([1,2,3]);

// toString()

val = (5).toString();
val = (true).toString();

// string to number
val = Number('5');
val = Number(true); // gives 1
val = Number(false); // gives 0
val = Number(null); // gives 0
val = Number('hello'); // gives NaN - its actual value which stands for Not a Number
val = Number([1,2,3]); // gives NaN as well
val = parseInt('100.223'); // parseInt will parse it as a integer hence gives 100
val = parseFloat('100.223') // gives float 


// output
console.log(val);
console.log(typeof val);
console.log(val.length); // only works on string // length of "5" = 1, length of 5 = undefined
console.log(val.toFixed(2)); // only works on numbers, no of decimal pts

// type coercion - basically same thing as how we change one type to another, just that we dont do it oruselves, JS does it for us

const val1 = '5';
const val2 = 6;
const sum = val1+ val2; // gives 56. since the 2 values were of diff types, JS changed 6 to a string, and concadeated '5' and '6' together to give '56'

console.log(sum);
console.log(typeof sum);


// -----------------------------
// 5. Numbers & the Math Obkect

const num1 = 100;
const num2 = 50;
let val;
// Simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 100
val = num1 / num2; // 2
val = num1 % num2; // 0


// Math object - used for certain operations 
val = Math.PI;
val = Math.E;
val = Math.round(2.8); //3
val = Math.ceil(2.4); //3
val = Math.floor(2.8); //2
val = Math.sqrt(64); //8
val = Math.abs(-3); //3
val = Math.pow(8,2); //64
val = Math.min(1,2,32,321);//1
val = Math.max(1,2,32,321);//321
val = Math.random(); // gives a random decimal
val = Math.floor(Math.random() * 20)+1 // if u want a range of values e.g random value from 0 to 20
console.log(val);

// -------------------------
// 6.String methods and concatenation

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = 'Hello there my name is Tim';
const tags = 'web design, web development, programming';

let val;
val = firstName + lastName;

val = firstName + " " + lastName;

//Append 
val = "Brad ";
val += 'Traversy';


val = "Hello, my name is " + firstName + " and I am " + age ;

// Escaping
val = "That's awesome, I can't wait!";
val = 'That\'s awesome, I can\'t wait'; // the backslash escapes thhe quote and takes its power away and just looks at it as a string

// Length 
val = firstName.length; // this is a property, not a method so dont need ()

// concat
val = firstName.concat(' ',lastName);

// Change case 
val = firstName.toUpperCase();

val = firstName.toLowerCase();

val = firstName[2];

// indexOf()

val = firstName.indexOf('l'); // William - first l is 2

val = firstName.lastIndexOf('l'); // last instance of l

// charAt()

val = firstName.charAt('2'); // is l
 

// get last char
val = firstName.charAt(firstName.length - 1);


// get sub strings - substring()
val = firstName.substring(0,4); // will

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3); // takes -1 -2 -3 aka last 3 letters

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Tim','Jack');

// includes()
val = str.includes('Hello'); // gives true
val = str.includes('foo'); // gives false
console.log(val);

// -------------------------------
// 7. Template literals - part of es6

const name = "John";
const age = 35;
const job = "Web Developer";
const city = "Miami";

let html;
// Without template strings (es5 way)
html = "<ul><li>Name: " + name + "</li><li>Age: "+ age + "</li><li>"+ job + "</li><li>City: "+ city + "</li></ul>";

html = "<ul>" +
        "<li>Name: "+name+"</li>" +
        "<li>Age: "+age+"</li>" +
        "<li>Job: "+job+"</li>" +
        "<li>City: "+city+"</li>" + 
        "</ul>"

function hello(){
    return 'hello';
} 
// can even incorporate functions in template literals

// With Template strings (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'} </li>

    <ul>
`;
document.body.innerHTML = html;


// 8. Arrays and Array Methods

// ways to create arrays
const numbers = [23,213,22,1,4,65];
// alternative way is via array constructor / object function
const numbers2 = new Array(12,23,21,1,52,2);

const fruit = ['Apple', 'Banana','Orange','Pear'];

const mixed = [12,'hello',true, undefined,null,{a:1,b:2}, new Date()]; // can create an array of mixed data types

let val;

// Get array length 
val = numbers.length;

// check if is array
val = Array.isArray(numbers); // since numbers is a array, it will give true value

// get single value
val = numbers[3]; // gives the 4th value in the array, as arrays are zero based aka index starts from 0

val = numbers[0]; // gives first value

// insert into array
numbers[2]= 100; // 100 is no in the 2 index posn
// find index of a value in array
val = numbers.indexOf(213); // 213 is in the index 1

// MUTATING ARRAYS
numbers.push(12); // 12 is now added at the end

numbers.unshift(120); // adds 120 to the front of array

numbers.pop(); // takes off from end

// Take off number from front
numbers.shift(); // first number gets taken off

// splice values
numbers.splice(1,3); // takes off just 3 values, from index 1 to index 3.

// Reverse the array
numbers.reverse(); // reverses the order of elememnts in arrays

// Concatenate 2 arrays

val = numbers.concat(numbers2); // combines the 2 arrays together

// Sorting arrays 
val = fruit.sort(); // sorts in alphabetiucal order

val = numbers.sort(); // will only SORT by FIRST DIGIT OF EACH NUMBER

// hence shld use the 'compare function'
// sort in ascending order
val = numbers.sort(function(x,y){
    return x - y;
}); // sorts in ascneding order

// sort in descending order
val = numbers.sort(function(x,y){
    return y - x;
}); // sorts in descneding order

// Find - takes in a testing function

function under50(num){
    return num < 50;
};

val = numbers.find(under50); // looks at the array, and the first element that gives true for the function
// basically the first instance in array that is under 50


function over50(num){
    return num > 50;
};
val = numbers.find(over50) // gives first instance in array that is over 50.

console.log(numbers)
console.log(val);

// ---------------
// 9. Object Literals

const person = {
    firstName:'Steve',
    lastName:'Smith',
    age:35,
    email:'steve@gmail.com',
    hobbies:['music','dance','sports'],
    address: {
        city:'miami',
        state:'florida'
    },
    getBirthYear: function(){
        return 2017 - this.age; // this refers to the obj
    }

};

let val ;
val = person; 
// get specific value
val = person.firstName; // recommended way
val = person['firstName'];
val = person.age;
val = person.hobbies[1]; // dance
val = person.address;
val = person.address.state;
val= person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name:'John',age:30},
    {name:'mike',age:24},
    {name:'nancy',age:32}
];

for (let i =0; i<people.length; i++){
    console.log(people[i].name, i)
}; // iterates thru the people array and logs each of them

// -----------------------
// 10. Dates and Times 
// javascript has a date object that we can use to do stuff w dates

let val;
// instantiating the date Object

const today = new Date(); // gives 12 september 2020
// 12/9/2020 , 4.05pm - for reference
// this is a object btw ^
// change the date and time
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();// gives 8 instead of 9 - why? because its zero based - zero represents january, hence sept represents 8 , not 9
val = today.getDate(); // gives the correct date
val = today.getDay(); // gives numerical representation of the day - gives 6 representing saturday

val = today.getFullYear(); //2020
val = today.getHours(); // 4pm represents 16hours
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // the amt of seconds that have passed since jan 1st 1970
birthday.setMonth(2); // setting mth to March (zero based)

birthday.setDate(12); // mar 12
birthday.setFullYear(1985);
birthday.setHours(3); // 03:00:00 am
birthday.setMinutes(12);
birthday.setSeconds(23);

console.log(birthday);

------------------------
// 11.If statements and comparison operators

// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100 ;

// EQUAL TO
if (id == 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO
if (id != 101){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// as you can see == doesnt check for the type, so even if id = a string, it will still log correct

// EQUAL TO VALUE & TYPE

if (id === 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// NOT EQUAL TO VALUE & TYPE
if (id !== 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// TEST IF ID IS DEFINED
if (typeof id !== 'undefined'){
    console.log(`the id is ${id}`);
} else {
    console.log('no id');
}

// GREATER OR LESS THAN 

if (id > 200){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// IF ELSE
const color = 'yellow';
if (color === 'red'){
    console.log('color is red');
 } else if (color === 'blue') {
     console.log('color is blue');
 } else {
     console.log('color is not red nor blue');
 }

 // LOGICAL OPERATORS

 // && operator
 const name = 'Steve';
 const age = 21;

 if (age > 0 && age < 12){
    console.log(`${name} is a child`);
 } else if (age >= 12 &&  age <=19){
    console.log(`${name} is a teenager`);
 } else {
     console.log(`${name} is an adult`);
 }

// OR ||
if (age < 16 || age > 65){
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race.`);
}

// WITHOUT CURLY BRACES - STILL POSSIBLE but not rly recommended

if (id === 100) 
    console.log('CORRECT');
else 
    console.log('INCORRECT')

// TERNARY OPERATOR - SHORTER VER OF IF ELSE
console.log(id === 100 ? 'CORRECT': 'INCORRECT');


//  ------------------------

// 12. Switches - use especially when there are a lot of cases, good substitue instead of doing many if else statements

const color = 'red';
// inside a switch define cases
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;

    default:
        console.log('color is not red or blue')
        break;
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
                            
}

console.log(`Today is ${day}`);

// --------------------------------
// 13.Function declarations & expressions 

// FUNCTION DECLARATIONS
// functions take in parameters, also called arguments
function greet(firstName = 'John', lastName = 'Doe'){
    // console.log('Hello');
    // es5 way of definign default values for the 2 params
    // if (typeof firstName === 'undefined'){
    //     firstName = 'John'
    // }
    // if (typeof lastName === 'undefined'){
    //     lastName = 'Doe'
    // }

    return 'hello ' + firstName + " "+lastName;
}

// console.log(greet()); // need to call a function


// FUNCTION EXPRESSIONS - BASICALLY PUTTING A FUNCTION AS A VARIABLE ASSIGNMENT
const square = function(x = 3){ // 3 is the default value for x
    return x * x
}; // usually we assign anonomous function to the namerd variable but we could name the function as well

console.log(square(8));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// its a function that we declare and run at the same time.

(function(){
    console.log('IIFY RAN...');
})(); // need to add the paranthesis at the end !


(function(name){
    console.log('hello ' + name);
})('brad'); 

(function(age){
    console.log('my age is '+age)
})(32);

// very useful when it comes to certain design patterns - e.g module pattern 

// we can put functions inside objects as well !
// PROPERTY METHODS
// when a function is put inside a obj, its called a method

const todo = {
    add:function(){
        console.log('add todo');
    },
    edit:function(id){
        console.log(`EDIT todo ${id}`);
    }
}

// canm also define functions out of the obj
todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


// -------------

// 14. General loops and iterations
// a loop is an instruction that repeeats till a specific condition is reached

// FOR LOOP 
for(let i=0;i<10;i++){
    if (i === 2){
        console.log('2 is my fav number');
        continue; // basically will stop the loop and go to the next iteration 
    };
    if(i === 5){
        console.log('stop the loop')
        break; // exit the loop
    }
    console.log('number', i); // will be fired off if continue isnt thr
}


// WHILE LOOP
let i = 0 ; // set variable outside the loop
while(i < 10){
    console.log('number',i);
    i++;
}

// DO WHILE LOOP 
// always will run at least once no matter what - this is what makes it diff from normal while loops

let i = 100;

do {
    console.log('number ' + i);
    i++;
}
// while (i<10);
// will return number 100 - as do while loops at least run ONCE


// LOOP THROUGH ARRAY

// FOR LOOP
const cars = ['ford','ferrari','honda'];
// for (let i =0 ; i< cars.length; i++){
//     console.log(i,cars[i]);
// }

// FOR EACH LOOP - easier and neater way

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array); // refers to the cars array
});

// MAP 
const users = [
    {id:1,name:'John'},
    {id:2,name:'bob'},
    {id:3,name:'anne'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

// FOR IN LOOP 
const user = {
    firstName:'John',
    lastName:'Doe',
    age:40
};

// basically loops thru each of the properties/keys of the user

for (let x in user){
    // console.log(x) // x gives us the keys aka properties
    console.log(`${x} : ${user[x]}`) 
}

// ---------------
// 15. Window object
// window is the global obj in client side javascript

// node js is a JS runtime that runs as a standalone process on our machine
// window is the global environment in client side js
// document is an obj stored as a property in the window obj

// WINDOW METHODS / OBJECTS / PROPERTIES
window.console.log(123);

// alert 
alert('Hello world'); // window.alert() works as well

// PROMPT 
const input = prompt(); // we enter an input 
alert(input);

CONFIRM 
if(confirm('are you sure')){
    console.log('yes');
} else {
    console.log('NO');
}
// it will give OK and cancel. if we press OK, will run console.log(yes). if we press cancel, will console.log(no)

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;


// Scroll points
val = window.scrollY; // position of the scroll bar in the vertical axis
val = window.scrollX;

// ----------------------
// 16.Location Object
// val = window.location; // gives a obj containing properties such as host, port, pathname, etc.

val = window.location.hostname; 

val = window.location.port;
val = window.location.href;
val = window.location.search; // will show query string . eg ?id=1&name=Brad&member=standard

// Redirect 
window.location.href = 'http://google.com' // redictrects to google.com
window.location.reload(); // reloads the window

// History Object
window.history.go(-1); // brings us the previous page we viisted . -2 brings us 2 pages back

val = window.history.length;


// Navigator Object
val = window.navigator;

val = window.navigator.appName; // will alw give netscape unless we are on IE
val = window.navigator.appVersion; // gives the version of their browser
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor; // google
val = window.navigator.language; // en-48

console.log(val);

// ---------------
// 17. Block Scope with let & const

// this is the GLOBAL SCOPE(not inside any functions etc)

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 5;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ',a,b,c)
};
test();

if(true){
    // Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ',a,b,c)    // 4 5 6
}

console.log('Global Scope: ',a,b,c) //4 2 3

// we defined a in the global scope but within the block scope of the if statement,that a variable has been changed. hence tats why global scope a changed to 4 instead of 1.

// but let and const are stil unchanged - scope level


for (let a=0 ; a<10; a++){
    console.log(`loop: ${a}`)
};

console.log('Global Scope: ',a,b,c); 1 2 3

// as u can see a variable in the global scope, and inside the block , theres a var with the same name but diff value, causing the value in global scope to change as well

// Let and Const are diff from var in the sense that they have block level scope whereas var has a function scope.

// when u dec a var w var in global scope, its value can be changed within block scope e.g if loop. (HOWEVER IN FUNCTION LEVEL SCOPE a var declared within function wont affect var declared globally)


let a = 1; // global scope
var b = 2;



function test(){
    let a = 2
    var b = 5 // function scope declaration. wont affect the b in global scope
    console.log('function scope :',a,b) //2 5
}

test();

console.log('global scope1:' , a,b) // 1 2

// why? because altho variable is dec using var, in test(), variables declared in it wont affect the global scope

// however in block level scope
if (true){
    let a = 5; // this has a block level scope
    var b = 10;
    console.log('block scope: ', a,b); // 5 10
}

console.log('global scope2: ',a,b) // 1 10

// hence variables dec globally using var can still be modified from within the block level scope !