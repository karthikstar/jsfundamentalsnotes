// Different functions used to evaluate regular expressions

let re;
// re = /hello/ 
// looks for the literal word hello. match must have hello, cannt be hell. 

re = /hello/i; 
// the i flag at the end makes it case INSENSITIVE, without it, its match must be with exact casing. i = case insensitive

re = /hello/g; // global search - checks for all instances of hellom not jus the first one it finds.

console.log(re);

console.log(re.source); // gives the actual expression inside the / /

// Functions used to evaluate expressions

// exec() - return result in an array if theres a match or null if theres no match

const result = re.exec('hello world');
const result = re.exec('hi world'); // null

const result = re.exec('hellooooooooo world'); // gives a match, index = 0
// theres diff meta characters we can use later which can help to find EXACT matches for hello, instead of helloooooooooooooo.



const result = re.exec('brad hello world'); // index = 5 , which is whr theres a match.

// 3 things we get in the array is the expression, index which the match starts at, and the actual input string its matching


console.log(result); // gives a array of 3 items. 

console.log(result[0])

console.log(result.index)
console.log(result.input)


// test() - returns true or false if it matches
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null 
// if hello is part of the string, at any posn, it will return a result array, else will return null 

const str = 'hello there';
const result = str.match(re);

console.log(result);

// search() - returns index of the first match, if not found returns -1

const str = 'yo hello there!';
const result = str.search(re);

console.log(result); // gives 3 as index of first match is at 3.


// replace() - return new string with some or all matches of a pattern 
const str = 'Hello there';
const newStr = str.replace(re,'Hi');

console.log(newStr); // gives hi there


