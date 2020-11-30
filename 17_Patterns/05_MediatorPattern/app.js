// Another Behavioural Pattern - Mediator Pattern 

// idea is to have a mediator which is basically a interface to communicte with whats called callings, which are mediated objects

// 2 constructor fns, one for user, one for chatrm


const User = function(name){
    this.name = name;
    this.chatroom = null;

}

User.prototype = {
    send:function(message,to){
        this.chatroom.send(message,this,to); // this pertains to the user

    },
    receive:function(message,from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function(){
    let users = {}; // list of users

    return {
        register:function(user){
            users[user.name] = user;
            user.chatroom = this;
            
        }
    }

}
