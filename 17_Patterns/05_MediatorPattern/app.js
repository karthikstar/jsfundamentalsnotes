// Another Behavioural Pattern - Mediator Pattern 

// idea is to have a mediator which is basically a interface to communicte with whats called callings, which are mediated objects

// 2 constructor fns, one for user, one for chatrm


const User = function(name){
    this.name = name;
    this.chatroom = null;

}

User.prototype = {
    send:function(message,to){
        // takes in 2 params : msg, and the to user.
        this.chatroom.send(message,this,to); // 'this' pertains to the user. (msg, user, to user)

    },
    receive:function(message,from){
        // msg , and from user
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}
// idea is for user to send single msg to another user / to send a msg to everyone in the rm
// chatrm is mediator, users are the callings of the chatrm

const Chatroom = function(){
    let users = {}; // list of users
    // callings have the register w the mediator
    return {
        register:function(user){
            users[user.name] = user;
            user.chatroom = this;
            // when we chatroom.register(user), we are adding an instance of chatrm object as a property of user
 
        },
        send: function(message,from,to){
            if(to){
                // single user message
                to.receive(message,from)
            } else {   
                // Mass message
                for(key in users){
                    if(users[key] !== from){ // make sure its not the user whos sending
                        // we are making sure the from user doesnt receive the msg that he sent to others.
                        users[key].receive(message,from);
                    }
                }
            }
        }
    }

}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

// create the mediator
const chatroom = new Chatroom();

// register the users
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('hello jeff',jeff);
sara.send('hi brad', brad);
jeff.send('hello everyone!');

console.log(brad)