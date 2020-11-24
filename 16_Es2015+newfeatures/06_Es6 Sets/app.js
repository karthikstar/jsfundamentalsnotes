// SETS - store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name:'john'});
set1.add(true);

// set1.add(100); // if we try to do this again, it doesnt add another 100 to the set as set mus always have UNIQUE VALUES

// alternative way to create a set
const set2 = new Set([1,true,{name:'tim'},'string'])

console.log(set1);
// console.log(set2);

// Get Count of no of values inside set
console.log(set1.size); // 4

// Check for values
console.log(set1.has(100)); // true

console.log(set1.has(50 + 50)); // true

console.log(set1.has({name:'john'})); // false - this is a reference obj/value, not a primitive value thats actually stored in the heap

console.log({name:'John'} === {name:'John'}) // false - the two objs are pting to different location in memory, they are not primitive types

// Delete from set

set1.delete(100);

// console.log(set1); // only has 3 values in set.

// ITERATING THRU SETS

// For.. of

for (let item of set1){
    console.log(item);
} // logs 3 items

// ForEach Loop
set1.forEach((value) => {
    console.log(value);
});

// We can covert sets into arrays, just like maps

const setArray = Array.from(set1);

console.log(setArray);