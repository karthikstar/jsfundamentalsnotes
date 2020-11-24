// Iterators & Generators - both diff but used in similar way which is to iterate thru something

// Iterators are advanced loops which can be paused while generators are functions that can be paused and can return multiple values


// // Iterator Example
// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next:function(){
//             return nextIndex < names.length ? // if next index less than length of array, return obj with value property storing a name
//             {value: names[nextIndex++], done:false} : 
//             {done:true} // return this when iterator has done iteratoring thru all the items of array
//         }
//     }
// }


// // Create an array of names
// const namesArray = ['jack','bob','john'];

// // Init iterator and pass in the names array 
// const names = nameIterator(namesArray);

// console.log(names.next()) // {value: "Jack",done:false}
// or
// console.log(names.next().value); // jack
// console.log(names.next().value); // bob
// console.log(names.next().value); // john
// console.log(names.next()); // done:true


// Generators are similar , but are basically functions that can return multiple values

// Generator Example 
// NOTE: to tell JS its a generator, * after function is impt!
// function* sayNames (){
//     yield 'Jack';
//     yield 'Bob';
//     yield 'John';
// } // here we are yielding values from our function


// const name = sayNames();
// // console.log(name.next()); // {value:"Jack", done:false} - similar to what we get in iterator

// // console.log(name.next().value) // Jack
// console.log(name.next().value); // jack 
// console.log(name.next().value); // bob
// console.log(name.next().value); // john
// console.log(name.next().value); //undefined

// ID Creator
function* createIds(){
    let index = 1;

    while(true){
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value); //1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4


// thus with a generator we can constantly generate IDs for e.g

// Why is first consoloe log 1 rather than 2? as technically index +=1 ?
// This is called post increment
// Post-increment will increment the value of a variable by 1 but only when everything of that statement is finished. For example console.log(x++), there are 2 things to be done on this statment, to log the value of x out and to increment the value of x and since we do x++ it will be the last thing to execute. 
// The order will be like this, first console.log(x) => console.log(0) then x++ => x += 1. 

// Same thing goes for the code  mentioned here, the value is names[index++], the order is names[index] => names[0] then index++ => index += 1.