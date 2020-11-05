// 1. Constructors & 'this' keyword
// Constructor is used to create multiple instances of a certain object 
// Person constructor

function Person(name,dob){
  // this.age = age;
  this.name = name;
  // console.log(this) 
  this.birthday = new Date(dob);
  // creating a method inside this constructor
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);

  }
}

const brad = new Person('brad','9-10-1981');

const john = new Person('john',35);


console.log(brad);
console.log(brad.calculateAge());


// as u can see we can use constructors to create many object instances 


// -----------------------
// 2. Built in constructors 

// there are constructor functions which serve as altenrative ways to create for instance, string, but not recommended. 

// String
const name1 = 'Bob'; // sets a primitive value to a variable

const name2 = new String('Bob'); // we can create the string as a obj if we want.

name2.foo = 'bar'; // can set new property as well to this obj

// console.log(name1);
// console.log(name2);

console.log(typeof name2); // object 

if (name2 === 'Bob'){
  console.log('yes')
} else {
  console.log('no')
} // value is Bob but type is not equal to string hence === gives no
// but if u use == it will give yes, as it only compares for value


// Number
const num1 = 5
const num2 = new Number(5);

console.log(typeof num2); // obj, not number


// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2); // gives the obj 
console.log(typeof bool2); // object

 // Fumction 

 const getSum1 = function(x,y){
   return x + y
 }


 const getSum2 = new Function('x','y','return 1 + 1'); // the last set of arguments is the function body 

 console.log(getSum1(1,1))

 console.log(getSum2(1,1))


// Object
const john = {
  name:"John"
}

const john2 = new Object({name:"John"})
console.log(john)
console.log(john2)

// Arrays 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr2);

// Regular Expressions 
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);



// -----------------------

// 3. Protypes Explained - object.prototype & person.prototype

// each obj in javascript has a prototype, and a prototype is an object itself . all objects inherit their properties and methods from prototype

// when we are dealinbg w obj literals we are inheriting from 1. Object.prototype


// 2.Person.prototype -  for objects which were created from constructors eg person constructor
// theres also smth called the prototype chain where we can from person.prototype up to the main object.prototype.

// Person.constructor
function Person(firstName,lastName,dob){
  this.firstName = firstName;
  this.lastName = lastName
  this.name = name;
  // console.log(this) 
  this.birthday = new Date(dob);
  // creating a method inside this constructor
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);

  // }
}

// how to put functions inside protoype so as to not flood our constructor function 

// Calculate age 
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);

}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

// Gets married 
Person.prototype.getsMarried = function(newLastname){
  this.lastName = newLastname;
}

const john = new Person('John','Doe','8-12-90');
const mary = new Person('Mary','Johnson','March 20 1978');

console.log(mary)
console.log(john.calculateAge()); // it works just as if it was inside the constructor


console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

// access methods in Object.Prototype

console.log(mary.hasOwnProperty('firstName')) // true

console.log(mary.hasOwnProperty('getFullName')) // gives false as getFullName is inside the prototype, its not part of the mary obj

// so mary obj has access to methods inside the Person.prototype as well as object.prototype but these are not considered as its own methods. 


// -------------------------------

// 4. Prototypal inheritance 

// whjat if we want one object inherit from another ? create a obj and a customer obj which will inherit its prototype

// Person Cosntructor 

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting 
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','Doe');

console.log(person1.greeting());

// create a constructor for a customer

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
  // call Person constructor
  // call is a function that allows us to call another function from another constructor 

  Person.call(this,firstName,lastName); // add whatever paroperties from ther constructor we are inheriting
  
  // extra properties that we have for the customer function, we add it here like how we nornmally do
  this.phone = phone;
  this.membership = membership;
  
}

// Inherit the Person Prototype methods 
Customer.prototype = Object.create(Person.prototype);


// Make customer.prototype return Customer()

Customer.prototype.constructor = Customer; 



// Create customer
const customer1 = new Customer('tom','smith',12232,'standard');
console.log(customer1)

// Customer greeting - overwrite the greeting in person.prototype

Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company`;

}

console.log(customer1.greeting()); 


// -----------------------

// 5. Using Object.create - another way to create objs 
// method 1
const personPrototypes = {
    greeting: function(){
        return `hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }

}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';

mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

// method 2
const brad = Object.create(personPrototypes, {
    firstName: {value:'Brad'},
    lastName: {value:'Cook'},
    age:{value:20}
});

console.log(brad);
console.log(brad.greeting());
//  this is an alternative way to create objects using object.create


--------------------------
//  now that we have seen how OOP works in ES5 syntax, lets look at Es6 classes! 

// 6. ES6 Classes 

class Person {
    constructor(firstName,lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `hello there ${this.firstName} ${this.lastName}`;
    } // any method that we add inside the class is gonna be added to the prototype(advantage)

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x,y){
        return x + y;
    } // static method - its not part of the Mary instance
}

// creating an obj from a class
const Mary = new Person('Mary','Williams','11-13-1980');
Mary.getsMarried('Thompson');
console.log(Mary);


// static methods - method that we can use without instantiating an object - eg create a method to add 2 numbers tgt 

// to use the static method, use the actual class name.
console.log(Person.addNumbers(2,2))

// classes are called syntartic sugar as they only change the way we write them but not under the hood / engien


// ----------------------------
// 7. Sub classes - inheritance in es6 classes 

class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('bob','cook')
Person.prototype.sample = function(){
    return 2
}
console.log(person1)
console.log(Person.prototype.sample())

// creating a sub class of Person -  Customer
class Customer extends Person {
    constructor(firstName,lastName,phone,membership){
        // when we instantiate Customer, since its extending a person, we want to call the Person constructor and we do that by using super
        // super calls the parent class's constructor.
        super(firstName,lastName); // we have to pass in here the two params

        // anything thats not a property of Person and just in the customer class, we write below. 
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John','Doe','2323232','Standard');
// since we extended Person, we can use any methods in it

console.log(john.greeting())

console.log(Customer.getMembershipCost());
