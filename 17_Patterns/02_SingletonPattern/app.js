// SINGLETON PATTERN 
// its a mainfestation of the module pattern, its an immediate anonymous function and can only return one instance of an object at a time. repeated calls to the constructor will only return the same instance. like the mod pattern, it maintains a private reference which nth from outside can access

// when will we use it?
// when we only want one user obj created at a time, prevent 2 users from being created at once.

const Singleton = (function(){
    let instance;

    function createInstance(){
        const object = new Object({name:'brad'});
        return object;
    }

    return {
        getInstance:function(){
            if (!instance){
                instance = createInstance();
            }
            return instance;

        }
    }

})();


const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// gives same output
console.log(instanceA);
console.log(instanceB);

console.log(instanceA === instanceB); // true

// we cant have more than one instance w this pattern.