//Prototype

let name = "Ritvik";
const arr = ["one", "two"];

console.log(arr);

//for everything whichever we create here, for them js will create and attach the respective object
//of in-built method / prototype with them.
//In js everything is object and every object must have prototype


//Prototype Chain:-

// arr.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// Array.prototype  (this is the prototype of above one)
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// arr.__proto__.__proto__    (this is the prototype of above one)
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// arr.__proto__.__proto__.__proto__       (this is the prototype of above one) 
// null

//and that's how prototype chain looks like (same for every created object in js)


//Prototypal Inheritance
const object1 = {
    name : "Ritvik",
    city : "Bhopal",

    getdetails : function(){
        console.log(this.name + " from " +this.city);
    }
}

const object2 = {
    name : "Rahul"
}

//Never try this way to implement (it is just for understanding)
//it's a bad programming practice

object2.__proto__ = object1;
//here we are just giving the access of prototype of object1
//to object2 so that it can access those things also
//which means object2 is inherit from object1 and this inheritance of prototypes
//is known as Prototypal Inheritance which happenes by following the prototype chain order.