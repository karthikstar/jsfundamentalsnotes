// Destructuring intreoduced in ES6
// easy way to extract variables from arrays and objects

// Destructuring Assignment

// let a,b;
// [a,b] = [100,200]; // 100 assigned to a, 200 assigned to b
// console.log(a) // 100

// Rest pattern

// [a,b,...rest] = [100,200,300,400,500]
// // This will assign whatever remaining as a array , to the rest variable
// // ... is the spread operator.

// console.log(rest) // [300,400,500]

// we can do the same w objects

// ({a , b} = {a:100, b:200, c:300,d:400, e:500});

// console.log(a,b) // 100 200

// ({a , b, ...rest} = {a:100, b:200, c:300,d:400, e:500});
// console.log(rest) // {c:300, d:400. e:500}


// Array Destructuring 
// const people = ['John','Mary','Tim'];

// const [person1, person2, person3] = people;

// console.log(person1) // John
// console.log(person2) // Mary
// console.log(person3) // Tim


// Parse array returned from function 
// function getPeople(){
//     return ['John','Beth', 'mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3) // john beth mike


// Object Destructuring
const person = {
    name:'tim',
    age:19,
    city:'Miami',
    gender:'Male',
    sayHello:function(){
        console.log('hello');
    }
}

// Old EE5way

// const name = person.name,
//     age = person.age,
//     city = person.city;

// New ES6 way
const {name, age, city, sayHello} = person;
// basically means const name = person.name for e.g

console.log(name,age,city);

sayHello(); // hello