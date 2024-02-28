//event bubbling

//event bubbling and event capturing/trickling are the major concept of javascript in which
//propogation of events happens in different different order 


//event bubbling 
//in this case event will propogate or execute from child to parent (from bottom to top)
//in up side direction in hierarchy.
//.eg.---
//lets say we have 3 divs 
//grandParentdiv    (3rd)

//parentdiv (then 2nd this will run)

//childdiv  (1st this will run) 

//if we clicked on child then it will go like child -> parent -> grandParent
//if we clicked on parent then parent -> grandParent
//if we clicked on grandparent -> will go on top of dom


//event capture/trickle
//event capturing or trickling both are same thing just names are different
//in this events will propogate inside in hierarchy of dom
//means if grandparent clicked then from it will come from top of dom till grandparent
//if parent clicked then granparent -> till parent
//if child clicked then grandparent -> parent -> till child



// document.querySelector("#grandparent")
// .addEventListener('click', ()=>{
//     console.log("grand parent clicked")
// }, true)

// document.querySelector("#parent")
// .addEventListener('click', ()=>{
//     console.log(" parent clicked")
// }, true)

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("child clicked")
// }, true)

//and we should pass 3rd parameter as a useCapture flag (boolean value)
//by default it will be false (if we dont pass)
//if false = event will bubble out
//if true = event will capture/trickle in 


//this concept is very expensive in terms of performance
//to resolve this w3c came with some solutions


//according to the w3c, always event will capture/trickle or come inside first then it will goes out/bubble out
//which means it follows a cycle and callbacks runs according to the flag parameter

//as it follows a cycle which means all the events will run or propogate 
//even if we miss match the true false value of useCapture
//.eg.----


// document.querySelector("#grandparent")
// .addEventListener('click', ()=>{
//     console.log("grand parent clicked")
// }, true)    //here first capturing phase will start and since this is true which means this event will capture first

// document.querySelector("#parent")
// .addEventListener('click', ()=>{
//     console.log(" parent clicked")
// }, false)   //since this is false so this event will not capture or run in capturing phase
//             //which means this event will run/bubble out in bubbling phase later.

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("child clicked")
// }, true)    //since this is true so this event will run/capture in capturing phase

//final answer would be
//grandparent
//child
//parent

//hence even if we miss match the usecapture flag but still all the events will propogate

//to stop propogation of events
//we can use 
//e.stopPropogation() provided by element object in callback
//e.g.---


//in case of capturing if we use stopPropogation() in any event then it will not go inside in capturing cycle
// document.querySelector("#grandparent")
// .addEventListener('click', ()=>{
//     console.log("grand parent clicked")
// }, true)

// document.querySelector("#parent")
// .addEventListener('click', (e)=>{
//     console.log(" parent clicked")
//     e.stopPropagation() //here I have used stopPropogation() so after this event it will not go further, stop the capturing event propgation cycle
// }, true)

// document.querySelector("#child")
// .addEventListener('click', ()=>{
//     console.log("child clicked")
// }, true)


//in case of event bubbling



document.querySelector("#grandparent")
.addEventListener('click', ()=>{
    console.log("grand parent clicked")
}, false)

document.querySelector("#parent")
.addEventListener('click', (e)=>{
    console.log(" parent clicked")
    e.stopPropagation() //here we have used stopPropogation() here so it will not allow further to move/bubble out after this event
}, false)   //or stop the propogation of bubble event cycle after this event

document.querySelector("#child")
.addEventListener('click', ()=>{
    console.log("child clicked")
}, false)