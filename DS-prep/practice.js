//sum of all natural numbers

// const sumOfNaturalNumbers=(n)=>{
//     let sum = 0;

//     for(let i = 1; i <= n; i++){
//         sum = sum + i;
//     }

//     return sum;
// }

// console.log(sumOfNaturalNumbers(5))


//sum of digits of a number

// const sumOfAllDigits=(n)=>{
//     let r = 0, s = 0;

//     while(n > 0){
//         r = n % 10;
//         s = s + r;
//         n = Math.floor(n / 10);
//     }

//     return s;
// }

// console.log(sumOfAllDigits(121));


//count of digits in a number

//n=234353, count of digits in n ?

// function countDigits(n){
//     let num = Math.abs(n);

//     let count = 0

//     do{
//         count++;
//         num = Math.floor(num / 10)
//     }while(num > 0)
//     return count;
// }

// console.log(countDigits(123));


//shallow copy

// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = arr1;    //it will asign the same value of first array and then both array will point to the
                //same reference point, that's why if we make any change by any array so it will
                //reflect for both, which is not correct

//deep copy

// let arr1 = [1, 2, 3, 4, 5, 6];

//let arr2 = [...arr1]    //by using spread op.

//let arr2 = Array.from(arr1);    //using Array.from()

// let arr2 = arr1.concat()    //we can use concat() method as well
//because if dont pass any array in concat() then it will return copy of first array
                

//check two arrays are equal or not

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5, 6];

// function checkArrays(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     for(let i = 0; i<arr1.length; i++){
//         if(arr1[1] !== arr2[i]){
//             return false
//         }
//     }

//     return true;
// }

// console.log(checkArrays(arr1, arr2))


//sort array

// let arr1 = [3, 1, 4, 2, 5];
// // arr1.sort() or
// // arr1.sort((a, b)=> a-b) //for ascending order

// //for descending order

// arr1.sort((a, b)=> b-a)
// console.log(arr1)


// let arr = ["one", 2, "ef"];
// let str = "Ritvik";

// for(let i = str.length -1; i >=0; i--){
//     console.log(str[i])    
// }
// console.log(arr, str)


//filter vs find
// let arr = [1, 4, 2,5, 3];
// let r1 = arr.filter((e)=> e>3);
// let r2 = arr.find((e)=> e>3);
// console.log(r1, r2)


//LCM of n array

// let n = [1, 2, 8, 3];

// function Gcd(a,b){
//     let min = Math.min(a, b);
//     hcf = 1;

//     for(let i=0;i<min;i++){
//         if(a%i===0 && b%i ===0){
//             hcf=i
//         }
//     }
//     return hcf;
// }

// function Lcm(n){
//     let min = n[0];

//     for(let i =1; i<n.length; i++){
//         min= Math.floor(Math.floor(n[i]*min )/ Gcd(n[i], min));
//     }

//     return min;
// }

// console.log(Lcm(n))

//find Ncr 

// function fact(a){
//     let res=1;
//     for(let i = 1; i<=a;i++){
//         res = res * i;
//     }
//     return res;
// }

// function NCR(n, r){
//     let result = Math.floor(fact(n)/(fact(r) * fact(n-r)))
//     return result;
// }

// console.log(NCR(5,3))

//leap year

// function checkLeapyear(n){
//     if(n%400===0 || n%4===0 & n%100!==0){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// console.log(checkLeapyear(1999))

let str = "a ritvik m ";

// console.log(str.charAt(2));
// console.log(str.charCodeAt());

// let str2 = "RITVIK";
// console.log(str.localeCompare(str2));   //-1

// console.log(str.substring(1, 3)); 
// console.log(str.slice(-3, -1)); //both works similar but we can take -ve index with slice 

// const trimStr = str.trim();
// const trimStrStart = str.trimStart();
// const trimStrEnd = str.trimEnd();
// console.log(trimStr, trimStr.length, trimStrStart, trimStrEnd);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// const num = 123;
// console.log(num, num.toString());

// const obj = {
//     name: "Vishal",
//     course: "DSA with Vishal"
// };
// console.log(obj, JSON.stringify(obj));
// console.log(str.split("").sort());
// console.log(str.join(" "));


//----------------------------------------

//arrange numbers to form greater number

// function compareNums(x, y){
//     let xy = x+y;

//     let yx = y+x;

//     return yx - xy;
// }

// function printLargest(arr){
//     arr.sort(compareNums);

//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//         console.log(arr.join(""));
//     }
// }

// let arr = [];
// arr.push("54");
// arr.push("546");
// arr.push("548");
// arr.push("60");

// printLargest(arr);



//-------------------------------------------------


//product except itself array


//-----------------------------------------------

//Occuring odd number times

// const arr = [1,2,3,2,3,1,3];


// const hm = new Map();

// for(let i=0; i<arr.length; i++){
//     if(hm.has(arr[i])){
//         let val = hm.get(arr[i]);
//         hm.set(arr[i], val+1);
//     }else{
//         hm.set(arr[i], 1);
//     }       //key     value
// }

// for(let [key, value] of hm.entries()){
//     if(hm.get(key) % 2 !== 0){
//         return key;
//     }
// }




//---------------------------

// array left rotation by dth position 

