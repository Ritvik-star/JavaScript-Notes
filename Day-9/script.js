// ENCAPSULATION
//e.g.

let student1 = {
    studentId: 100,
    name: "Ritvik",

    getName: function(){
        return this.name;
    }
}

let student2 = {
    studentId : 200,
    name: "ram",

    getName: function(){
        return this.name;
    }
}
// console.log(student1);
// console.log(student2);

//drawbacks
//-> there is no code reusibility
//-> steps repeations
//-> If want to change something then have to do it everywhere mannually which not possible in
// case of lot's of objects
//so to overcome these drawbacks Encapsulations comes into picture.
//what is does -> basically it binds all properties , methods in one method or package and then we can call that 
//method for multiple objects and once we changed something then it will reflect for every object
//so there are three ways to achieve Encapsulation -
//1). factory method 
//2). construtor method
//3). using classes

//1). factory method 
function studentFM(id, name){
    return{
        id: id,
        name: name,

        getName: function(){
            return name;
        }
    }
}
let objHolder1 = studentFM(101, "sita");
let objHolder2 = studentFM(102, "rita");
console.log(objHolder1);
console.log(objHolder2);
//so what FM does -> basically it is a method which wraps all the properties and other child methods in a single object 
//and then we call it multiple in any varible as we want.
//so we invoke that method it returns all properties and methods after wrapping them in one object, where it invokes
//and we need to pass the values for properties as an argument while invokation
//and here we don't need this keyword because we are not referring anything here, we are just returning everyting.
//and I can call that factory method multple time for different different variables and if any change will found 
//then it will reflect for every place where I call or used that wrapped object by factory method.

//2). constuctor method
function studentCons(id, name){
    this.id = id,
    this.name = name,

    this.Name = () => { //here this is referring to that object which calling that method
        return this.name;
    }

}
let obj1 = new studentCons(201, "gita");    //'new' keyword -> first it will create new blank object -> then
let obj2 = new studentCons(202, "mita");    // all those properties and methods will binded in a object & then we can use it
console.log(obj1);                          //if we dont use 'new' keyword then no object will create.
console.log(obj2);  //obj1 / obj2 are just reference variable which are pointing to given object
console.log(obj2.Name());
//what CM does here -> when we create a consturctor then to invoke it we have to define a template by using
//which we can access all those properties and methods inside of constructor and then it will binds those things 
//in one object with help of 'new' keyword
//and if we do any changes inside CM then it will reflecte to everywhere
//and here we do not return any property directly , we just reffer them using 'this' keyword and use them.

//3). Classes
class studentClass{
    constructor(id, name){
        this.id = id,
        this.name = name
    }
}

let classObj = new studentClass(300, "Ali");
console.log(classObj);
//this is third way to achieve Encapsulation in JS.


//ABSTRACTION
//It is also a OOPs concept which is used to hide non-essential data from user
//.e.g.
//real life example is - > working of Atm machine
//normal user uses Atm machine but machine never shows the internal process to user
//because if it allow to see internal process then there might be a chance where user can interupt in 
//actuall working of machine so that'swhy the developers of machines they keep that process as secert 
//and this all process is known as Abstraction

//let's say there a object which have few methods
person = {
    name : "Ravi",
    number: 123456789,
    id: 101,

    getName: function(){
        const details = getImp()
        return {
            name: this.name,
            details : details
        }
    },

    let getImp = () =>{
        return this.id + " " + this.number
    }
}

console.log(person.getName());
//SMART
// Specific, Measurable, Achievable, Relevant, Time-bound

