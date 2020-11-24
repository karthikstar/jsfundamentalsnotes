// Maps are a new object structure intreoduced in es6. its an obj that holds key value pairs and any value whether its an obj/obj reference type can be used as a key which is diff from object literal

// MAPS = key value pairs - can use ANY type as a key or value

const map1 = new Map();
// Set keys
const key1 = 'some random string',
    key2 = {},
    key3 = function(){};

// Set map values by key - by passing key, and value into map.set()

map1.set(key1,'Value of key 1');
map1.set(key2,'Value of key 2');
map1.set(key3,'Value of key 3');

// Get values by key

// console.log(map1.get(key1)); // Value of key 1

// Count number of values inside the map
// console.log(map1.size); //3 as thr are 3 key value pairs inside the map

// ITERATING MAPS

// Loop using for ... of to get keys and values

// for (let [key,value] of map1){
//     console.log(`${key} = ${value}`);
// }

// some random string = Value of key 1
// [object Object] = Value of key 2
// function(){} = Value of key 3

// Iterate keys only

for (let key of map1.keys()){
    console.log(key);
} 
// some random string
// {}
// ƒ (){}

// Iterate values only

for (let value of map1.values()){
    console.log(value);
} 


// Loop with forEach
map1.forEach(function(value,key){
    console.log(`${key} = ${value}`);
})


// CONVERT TO ARRAYS
// Create an array of the key value pairs

const keyValArr = Array.from(map1);

console.log(keyValArr);


// Create an array of the VALUES

const valArr = Array.from(map1.values());

console.log(valArr); // ["Value of key 1", "Value of key 2","Value of key 3"]

// Create an array of the KEYs

const keyArr = Array.from(map1.keys());

console.log(keyArr); // ["some random str", {}, f(){} ]