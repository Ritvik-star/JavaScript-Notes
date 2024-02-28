//Variable Shadowing 
//If we define any variable globally or in global scope and then we define another variable
//in block scope or inside any function or loop with same name then inner varible will
//overshadow of global varible means it will overwrite so then we can't access that global varible
//inside the function, only can access inner varible 
//adavntages - no
//disadvantages - 1). can't access global varible inside any block scope
//2). if user is not aware with shadowing then he/she might be get confused like which varible
//they are using.
//to avoid that behaviour of js we can use different name of varible even for same purpose

//example-
//#1    //with normal functions
let globalVar = 10;
function myfunc1(){
    let globalVar = 20;
    console.log(globalVar);
}

console.log(globalVar);
myfunc1();

//#2    //with loops
let no = 11;
for(let no = 0; no < 3; no++){
    console.log(no);
}
console.log(no);

//#3    //with callback functions
let name = 'Ritvik';
['Ram', 'John', 'Sunny'].forEach((name) =>{
    console.log("inner scope " + name);
});


//Classes in js
class Question{ //we can define class by using Class keyword
    #_name;  //private varible
    #lastName;  //private varible, to make them private we have to use '#' at prefix

    constructor(id, question, answer, name, lastName){  //unlike java , js does not invoke constructor defaulty 
        this._id = id;           //so we have to define it by using constructor() inside the class
        this.question = question;   //and it contains all the public properties
        this.answer = answer;   //can access all these properties by calling class object
        //private properties
        this.#_name = name;
        this.#lastName = lastName;
    }
    show(input) {   //we can also define other methods inside the class, even don't need function keyword
        return this.question +" this is asked by "+ input + " and answer is " + this.answer;
    }   //and can access it by calling it with object of class

    static age = 22;    //static varible
    static getAge(n){   //static method
        return "Age of " + n + " is " + this.age;
    }

    //get() & set() method, used them to get and to set the properties of class's constructor
    //name of method of get & set and accessing property should be different
    get id(){
        return this._id;
    }
    set id(x){
        this._id = x;
    }
    //above methods are using for public 

    get name(){
        return this.#_name;
    }
    set name(name){
        this.#_name = name;
    }//above methods are using for private

}
//classobj      //template
let ques = new Question(100, 'what is full form of WWW?', 'Wolrd Wide Web', 'Ritvik', 'Bandewar');
//if does not define any property inside constructor then it will return blank object
//so to acheive all it as normally we have to define all properties by using object of class
//explicitly like below
// ques.id = 100;
// ques.question = 'what is full form of WWW?';
// ques.answer = 'World Wide Web';

console.log(ques);  
console.log(ques.show('Ritvik'));

// static varibles and methods
//if we defined any varible or any methods as static then we can not access them directly by using
//object of class , so to access them we need to call them with class name because they stored in class
//level memory not in heap memory .e.g.

// console.log(ques.age);
// console.log(ques.getAge("Ritvik"));
//above code  will not work

console.log(Question.age);
console.log(Question.getAge("Ritvik")); //it will work
//inside class we don't need any keyword[var, let , const] or function keyword to declare
// varibles and functions.

//get() & set()
//accessing id property of constructor of class by using get() & set()
console.log(ques.id);//calling id() with object of class
//above we accessing get & set() as public 


//private variables '#' to access outside them we have to bind them with get() or set()
//or with any other method of class then we can use those instances by calling binded methods
//with object name .e.g.
console.log(ques.name);
//and here we are accessing get & set() as private because 


//Inheritance 
class Result{
    constructor(input){
        this.userInput = input;
        this.amswer = "Ritvik";
    }

    checkAnswer(){
        return this.userInput == this.answer;
    }
}

class newQuestion extends Result{
    constructor(id, question, input){
        super(input);   //it will uses to call constructor of parent class
        this.id = id;
        this.question = question;
    }

    show(){
        return this.checkAnswer() ? "Correct Answer" : "Wrong Answer";  //parent class method
    }
}

let ques1 = new newQuestion(200, "What is your name ?", "Ritvik");
console.log(ques1);
console.log(ques1.show());