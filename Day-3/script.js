//Functions

function myfunt(a, b){  //normal function
    return a + b;
}
console.log(myfunt(4, 9));

//Arrow function {mostly recommended}
const sum = (x, y) =>{
    return x + y;
}
console.log(sum(4, 5));

join = (arg1, arg2, arg3) =>{   //setting 3 arguments in function
    console.log(arg1, arg2, arg3);
}
join(1, 2);     //but passing only 2 argument
//output will be as [1 2 undefined]
//that's why JS is not strict language.

//coercion
function add(m, n){
    return m+n;
}
console.log(add(7,"Ritvik"));   //it will treat all as number
console.log("Ritvik" + 5 + 2);  //it will treat all as string and will concanate all


//-----------------------------------------------------------------------------------
//Hoisting 
//#1
one = 10;   //declaration part
console.log(one);
var one;    //initialization part

//#2
var c;  
console.log(c);     //it will not work
c = 11; //declaration part

//#3
test = 'Ritvik';    //declaration
console.log(test);
var test;   //initialization

//Hoisting works only for 'var' , it does not work for 'Let' and 'const'

//#4
console.log(text());
function text(){
    return "This is hoisted function";
}   //hoisting supports only normal fuction , not support to Arrow function

//#5
console.log(myfunt2());

function myfunt2(){
    z = 10;
    console.log(z);
    var z;
    return z;
}

// //#6
// console.log(second());

// function first(){
//     ll = 123;
//     var ll;
//     return ll;
//     function second(){
//         var res = first();
//         return res;
//     }
// }


//--------------------------------------------------------------------------------
//isNaN
console.log(isNaN(4));
console.log(isNaN("Ritvik"));
console.log(isNaN(false));
console.log(isNaN(true));
console.log(isNaN(undefined));
console.log(isNaN(null));
console.log(isNaN("45"));


//------------------------------------------------------------------------------------------------
//Objects
//It is key-value, combination and container which can have some property and may have some methods
//const - it will not reinitialized

//#1 create Object
const mobile = {
    modal: 'iphone',
    memory: '128gb',
    camera: '8 mega pixels',
    screen: '6.5inches',
    color: "black",
    getScreenAndMemory : function() {
        return "Modal is" + this.modal + "and memory is" + this.memory;
    },
    showColor: function(){
        return this.color;
    }
}

//way-2
const o2 = Object.create(mobile);   //it will create new object with prototype of mobile

//way-3 
function cons(a){   //by using constructor we can also create objs
    this.a = a;
}
const c = new cons(12);

//#2 Access Object
let modal = mobile.modal;   //one way to access a perticular property of object
console.log(mobile.color);
console.log(mobile.showColor());
console.log(modal);
let camera = mobile['camera'];     //this is the another way to access property of object
// let c = mobile['color'];
console.log(camera);
console.log(mobile.getScreenAndMemory());
console.log(mobile);    // can access whole object also

//#3 Update and Delete Object
mobile.memory = '256gb';    //update
console.log("new memory is " + mobile.memory);
mobile.color = 'white'
console.log(mobile.color)
delete mobile.color
mobile.ram = '6gb';     //adding new properties
mobile['color'] = 'black';
console.log(mobile);

delete mobile.screen;   //can delete like that
console.log(mobile);


//------------------------------------------------------------------
//Arrays
// Create Array
//#1
const arr = ['audi', 'bmw', 'maruti'];  //recommended, if limitted array need
const arr9 = [1]
//#2
const arr2 = [];    //recommended, if need to update later
arr2[0] = 'verna'; 
arr2[1]  = 'i20';
arr2[2] = 'i10';
//#3
const arr3 = Array('kia', 45, 'seltos'); //it is not preferrable , its slow because its create Array constructor than Array

//Access Array
console.log(arr[1]);
console.log(arr2[2]);
console.log(arr3);

//calculate the lenght of array
let length = arr.length; 
console.log('length of array is '+ length);

//push()    - method to add new element at last
//#1    //recommended
arr2.push('hyundai');
console.log(arr2);

//#2    - adding element using index
arr2[5] = 'santafe';    //not recommended 
console.log(arr2);

//new Array
const arr4 = [100]; //it will create an array arr4 with only one element which is 100
const arr5 = new Array(100);    //it will create arr5 blank array of size 100;
console.log(arr4, arr5)
//toSrting()    - will represent as string 
//join() - will behave in similar way as toSrting() but can pass seperator
console.log(arr.toString());
console.log(arr.join("-"));

//pop() - remove element from last
let ele = arr.pop();
console.log(ele);
console.log(arr);

//shift()   - remove element but from first
console.log(arr);
arr.shift();
console.log(arr);

//unshift()   - add new element at start
arr.unshift("hyundai");
console.log(arr);

//splice(index_number, delete_count, element)  - add new element at any specific index
arr.splice(1, 0, "tata", "maruti");
console.log(arr);
arr.splice(2, 1, 3000);
console.log(arr);

//concat()  - it will merge/concanate three arrays
const arr6 = arr.concat(arr2, arr3);
console.log(arr6);

//slice()   - it recreates/slice any array from the existing array 
console.log(arr);
const newarr = arr.slice(1,3);  //if we pass two index as than it will take element from 1st given index till previous element of 2nd given index
console.log(newarr);
const newarr2 = arr.slice(1);   //if we pass only one index then it will take elements from given index till the last element.
console.log(newarr2);


//


