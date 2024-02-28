//ForEach method

const arr = [4, 5, 6, 3, 9, 10];

//#1
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);     //  This is normal for loop approach 
// }
//but instead of this you can use .ForEach() which will work similar and easily
//more recommended

//#2
arr.forEach((element)=>{
    console.log(element);
});
//defaulty elements will come on next line
//to print in one line 
var data = '';
arr.forEach((element)=>{
    return data = data + element + " ";
});
console.log(data);
//after using this way elements will print in one line

//.filter()
//if we want to filter some of values from array then you can use .filter() e.g.

const filterdata = arr.filter((element)=>{
    return element >= 5;
})
console.log("values are " + filterdata.join('-'));
//here we are filtering elements greater and equal to than 5
//filter returns new array with filtered elements

//Map()
//While iterating each element, you can modify the things
const mappedArr = arr.map((element)=>{
    return element+1;   //if we will add nothing with elements then it just print array as it is in one line,
                        // which means this is another way to print array's element in one line
                        //we can add, sub, multi, divide etc.
})
console.log(mappedArr);

//indexOf()     ->uses to get the index of element of array
const index = arr.indexOf(9);
console.log(index);

//lastIndexOf()     -> uses to get the last index of element if there are repeated elements
const lastindex = arr.lastIndexOf(3);
console.log(lastindex);

//reduce()  ->basically it binds/add all element of array according to user given situation
let result = arr.reduce((sum, value) =>{
    return sum + value;     //sum = sum + value
}, 0);      // sum = 0 -> sum = 0+5 -> sum = 5, sum = sum + value and so on 
console.log(result);

//example of reduce()
//#1
//this is the array of objects

const studentArray = [
    {
        id:101,
        name:'Ritvik',
        city:'Bhopal'
    },
    {
        id:102,
        name:'Shubham',
        city:'Delhi'
    },
    {
        id:103,
        name:'Anchal',
        city:'Pune'
    }
];
let groupOfStudent = studentArray.reduce((cityObj, item)=>{
    let key = item.city;
    cityObj[key]= item.name;
    return cityObj;
},{})
console.log(groupOfStudent);
//#2
const petAnimals = ["dog", "cat", "cow", "dog", "cat", "rabbit"];

const petCount = petAnimals.reduce(function(obj, pet){
    if(!obj[pet]){  //#1, 
        obj[pet] = 1;
    }
    else{
        obj[pet]++; //increasing the count
    }
    return obj;
}, {}); //{dog : 2, cat : 2, cow : 1, rabbit : 1}
console.log(petCount);


Object.keys(obj)   //it will return an array of all the keys/properties in object
Object.values(obj) //will return an array of all the values of keys in object
Object.entries(obj)    //creates a nested array of the key/value pairs of an object.
Object.freeze(obj) //prevents modification to properties and values of an object,
                // and prevents properties from being added or removed from an object.

Object.assign(obj)                
//is used to copy values from one object to another.
                //We can create two objects, and merge them with Object.assign().

Object.seal(obj)   //prevents new properties from being added to an object,
// but allows the modification of existing properties. This method is similar to Object.freeze().


//Pass by Value and Pass by reference 
//#1 pass by value  //it works for primitive datatypes
let a = 5;
let b = a;  //here we are just passing the value of a in b
console.log(a, b);
b = 7;
console.log(a, b);
//#2 pass by reference  //it works for reference datatypes
const obj1 = {name: 'ritvik'};
const obj2 = obj1;  //here we are passing reference of obj1 to obj2
console.log('property of object1',obj1,'property of object2', obj2);
obj2.name = 'rahul';
console.log('after changing');
console.log('property of object1',obj1,'property of object2', obj2);


//for of & for in loops
//#1 for of loop
//use it always in case of array, because it gives values one by one .e.g
const array1 = [2, 3, 5, 7, 11, 13];
console.log("for(of) loop")
for(let val of array1){ //recommended
    console.log(val);
}
for(let e of array1){
    console.log(e);
}
// console.log("using for(in) with array");
// for(let val2 in array1){
//     console.log(val2);
// } when we will trying to use for(in) loop with array then indexes will be print/come as output


//#2 for in loop
//use it always in case of objects because it iterates properties one by one 
const obj3 = {id:111, name:'raj', city:'Bhopal'};
for(let property in obj3){
    console.log(property, obj3[property]);
    // console.log(obj3[property]);
}
for(let e in obj3){
    console.log(e)
}
const arrayofobj = [
    {
        id:1111,
        name:'rahul'
    },
    {
        id:1112,
        name:'raj'
    },
    {
        id:1113,
        name:'riya'
    },
];
var count = 1;
for(let prop of arrayofobj){
    console.log(count);
    console.log(prop);
    count++;
}


//'this' keyword
//'this' is a keyword, which refers to that object which is being called.

//#1).this keyword in global scope
console.log(this);  //will print blank object because till that time there no object or property which is refered by this keyword
this.name = 'Ravi rai'; //now we refered a property using this
console.log(this);  //and then it will print that property

//#2). this keyword in function scope
function myfunc(){
    console.log(this);
}
myfunc();   //here we calling our method globally so, object of 'this' will be global
//because there is no other object for myfun() and 'this' is not referring to any object here.

//#3
const student1 = {  //object 1
    id: 999,
    firstName: 'Ritvik',
    lastName: 'bandewar',
    getName : function () {
        return this.firstName +" "+ this.lastName;
    },   //here object of 'this' keyword is student1 
    getMessage : function(){
        return "Hey!" + this.firstName + "-this is your message-" + message;
    }
};
console.log(student1.getName()); //here we are calling method globally but there is a object
//for our method so, we need to call that object with method and that's how
//object of 'this' keyword can be change in globally also

//#4
//call()
//by using call() you can return another second object  which have same properties 
//which also first object had, without creating method in second object to return.
const student2 = {firstName: 'Rahul', lastName: 'Roy'};     //object 2
const r = student1.getName.call(student2);  //here we are borrowing getName method from obj1 for obj2
console.log(r);
//here properties of second object are returning, so object of this is changed or 
//it will be same (previous object)


//we can also pass parameters normally in call() e.g.
let message = "You are winner";
console.log(student1.getMessage.call(student2, message));

//#5
//apply()
//it works as call() but we have to pass parameter as array e.g.
let messageAsArray = ["You are looser"];
console.log(student1.getMessage.apply(student2, messageAsArray));
//why it's printing same message, even after using different methods?????????????????????????


//#6
//bind()
const pokemon = {   //obj1
    firstName: "Pika",
    lastName: "chu",
    getName: function(){
        var fullName = this.firstName +' '+this.lastName;
        return fullName;
    }
}

var otherPokemon = function(){  //external instance and method created
    console.log(this.getName() + " I choose this pokemon.");
};

var lockPokemon = otherPokemon.bind(pokemon);   //creating new object and binding with pokemon object
lockPokemon();
//bind() method, by using this method we can bind other external methods with existing method
//of called object and can get the access of all properties and methods of object by just binding new 
//method with object e.g. Line no. 227, and then we can call it.

