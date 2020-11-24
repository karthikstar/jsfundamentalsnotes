// Symbols
// unique thing is that every single one is completely unique hence this makes them valuabe in terms of things like object property identifiers

// const sym1 = Symbol(); // no constructor hyence dont need new keyowrd

// const sym2 = Symbol('sym2'); // add a identifier inside of the symbol

// console.log(typeof sym1);
// console.log(sym2);

// no 2 symbols can be the same

// console.log(Symbol() === Symbol()); // false, 
// console.log(Symbol('123') === Symbol('123')); // false

// // to use sym in backticks
// console.log(`hello ${String(sym1)}`) // need covert symbol to string

// Unique Object Keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1'
myObj[KEY2] = 'Prop2'
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for .. in

for (let i in myObj){
    console.log(`${i}: ${myObj[i]}`)
} 
// we only get key3: Prop3 and key4:Prop4
// only the two regular properties show up as symbols are not enumerable

// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({key:'prop'}))


console.log(JSON.stringify({[Symbol('sym1')]:'prop'})) // gives empty {}



