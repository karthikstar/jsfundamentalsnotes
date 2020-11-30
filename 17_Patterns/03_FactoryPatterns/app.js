// FACTORY PATTERNS - also called the factory method
// way of creating interface for creating objects
// we can let subclasses to decide which classes to instantiate

// factory methods often used in apps to manage and maintain collections of objects that are different but at the same time have common characteristics

function MemberFactory(){
    this.createMember = function(name,type){
        let member;

        if(type === 'simple'){
            member = new SimpleMembership(name);
        } else if (type === 'standard'){
            member = new StandardMembership(name);
        } else if (type === 'super'){
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;

    }
}


const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5';

}


const StandardMembership = function(name){
    this.name = name;
    this.cost = '$15';
    
}


const SuperMembership = function(name){
    this.name = name;
    this.cost = '$25';
    
}

const members = []

const factory = new MemberFactory();
// console.log(factory);
members.push(factory.createMember('bob','simple')); // instance of simple membership
members.push(factory.createMember('jack','super')); // instance of super membership

members.push(factory.createMember('anne','standard')); // instance of standard membership

members.push(factory.createMember('william','simple')); // instance of simple membersihp

// console.log(members);


members.forEach(function(member){
    member.define();
})

// factory pattern is rly good for when we have difff objs which share some  properties and methods