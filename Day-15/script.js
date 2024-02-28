//event delegations

//this is js concept which based on event bubbling 
//simply if we have many child or nested elements then we usually gives events to every elements seperately
//which will be not good case
//but if we want to handle all the nested or child element by just giving one event on thier parent
//so this we can achieve by following event deligation concept


//e.g.---

// document.querySelector('#category')
// .addEventListener('click', (e)=>{
//     console.log(e.target.id);
//})

//so this is an event on parent but still we will be able to access or call it from child
//when we click on any child of its then the event bubbling cycle will start and move out till its parent
//and then its parents event will run

//but still there is a issue, what if there will be other elements except li in parent

//so in that we have to check weather the clicked or used element is li or not 
//basically we have to make sure that user should be able to perform this events with some elements not with all

//so we can put a check
//.e.g...


// document.querySelector('#category')
// .addEventListener('click', (e)=>{
//     if(e.target.tagName == 'LI'){
//         // console.log(e.target.id);
//         window.location.href="/"+e.target.id
//     }
// })




//To achieve behavioural design pattern by using event deligation
//yes we can achieve BDP by using ED and this is the one more advantage of it.

document.querySelector('#userinput')
.addEventListener('keyup', (e)=>{
    console.log(e);

    // e.target.value = e.target.value.toUpperCase()   //this will convert the user input into uppercase
                            //but it will applicable on every element which inside #userinput id

                            //so to apply behavioural design pattern we can add an attribute to anyone element and based on that 
                            //we can apply this behaviour

    if(e.target.dataset.uppercase != undefined){    //if it is != undefinded means it is present
        e.target.value= e.target.value.toUpperCase()
    }//now only this logic will aplicable on that element where this uppercase attribute is present
    //and that's how we can achieve behavioural design pattern using event deligation
})




//custom hook

// function useCustomHook(){
//     const [check, setCheck] = useState(false);

//     function handleCheck(){
//         if(check){
//             setCheck(false)
//         }else{
//             setCheck(true)
//         }

//     }

//     return [check, handleCheck];
// }


// const [check, handleCheck] = useCustomHook();




//rest and spread operator  (introduced in ES6 version)

    //rest operator
        //it is used to compress or bind the arguments or variables in an array.
        //.e.g...
        //if we are having 4 arguments in a function then we can bind them in one array
        //.e.g...
        // function funs(a, b, ...c){
        //     return c;   //[1,2,3];
        // }
        // funs('a', 'b', 1, 2, 3);

        //it use '...' to denotes rest operator.

    //spread operator
        //it is used to copy or extends the properties of object or array
        //.e.g...
        // const arr1 = [1, 2, 3];
        // const arr2 = [4, 5, ...arr1];   //[4, 5, 1, 2, 3]

