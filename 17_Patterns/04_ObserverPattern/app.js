// Observer pattern - allows us to suibscribe and unsubscribe to certain events or certain functionalities 
// gives us a nice subscription module

// can be used to notify the DOM on certain elements to be updated

// create a constructor fn, which has one property called observers
function EventObserver(){
    this.observers = [];

}

EventObserver.prototype = {
    subscribe:function(fn){ // subscribe to the fn
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`)
        // we are subscribed to these observers. 
    },
    unsubscribe:function(fn){
        // Filter out from the list whatever matches the callback function . if theres no match, the callback gets to stay on the list.The filter returns a new list and reassigns the list of observers. 
        // basically we will filter out the existing fn in the observers list, which matches the function passed into unsubscribe()
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;

            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`); 
    },
    fire:function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners

document.querySelector('.sub-ms').addEventListener('click', function(){
    // click obj calls the subscribe method, which takes in a function(aka observer) to subscribe to. 
    click.subscribe(getCurMilliseconds);
})


document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
})

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
})


document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
})



document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
})

// Click handler
const getCurMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

}

const getCurSeconds = function(){
    console.log(`Current seconds: ${new Date().getSeconds()}`);

}