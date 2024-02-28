//Clouser
function outer(){
    const a = 10;
    function inner(){
        const b = a + 10;
        return b;
    }
    const inn = inner();
    return inn;
}

const result = outer();
console.log(result);

//clouser is default behaviour/concept of javascript which allows us to get the access of outer function from inner function
//clouser also applicable for Abstraction concept 
//Abstraction
//it is a oops concept in which we hide the non-essential data from normal user
//above code is an example.

//Polymorphisum
//overloading - js not supports
//because in js it is not mandatory that if we define any function with some parameters
//then it's not neccessary that, while calling that function, we have to pass same amount of argument, we can pass 
//minimum number of argument also.

//overriding - js supports
class test{
    show(){
        console.log("this is parent class");
    }
}

class test2 extends test{

    show(){
        super.show();   //this is how we can invoke parent methods
        console.log("this is child class");
    }
}
const t = new test2();
t.show();



