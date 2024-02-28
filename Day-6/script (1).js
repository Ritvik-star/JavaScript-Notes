let elements = document.getElementsByTagName('p');  //it will return all p element's array
console.log(elements[0].innerHTML);


function myfunc(){
    const element = document.getElementById('change');
    element.style.fontSize = '30px';
    element.style.color = 'red';
    element.style.fontWeight = 'bold';
    element.style.margin = '100px';
    element.style.border = '2px solid black';
    element.style.width = 'fit-content';
}

//this is how we can edit or style through JS using .style property

//getElementByClassName //it will also return collection of data of same class
function myfunc2(){
    const paras = document.getElementsByClassName('head');
    const len = paras.length;
    document.getElementById('len').innerHTML = "length of tags is " + len;
    var data = "";
    for(let i = 0; i < len; i++){
        paras[i].style.color = "red";
        data += paras[i].innerHTML + "----";
        document.getElementById("print").innerHTML = data;
    }
}

//document.write()
function myfunc3() {
    document.write("hey! Ritvik.");    
}
//we are using external js file here so it will render on new page at top


//EVENTS
//onload()
// function myload(){
//     let age = prompt("enter you age");
//     if(age > 18){
//         return true;
//     }
//     else{
//         window.close();
//     }
//     return;
// }
//it will run(once) whenever main body or page will load 
//always use it with body element


//onmouseOver(), onmouseOut()
function mouseOut(element){
    element.innerHTML = "cursor is out from element";
    element.style.backgroundColor = "white";
    element.style.padding = "10px";
    element.style.border = "1px solid red";
    element.style.width = "fit-content";
    element.style.transition = "transform 3s";
    element.style.transform = "rotate(0deg)"; 
}
function mouseOver(element){
    element.innerHTML = "cursor is on element";
    element.style.backgroundColor = "yellow";
    element.style.padding = "10px";
    element.style.border = "1px solid red";
    element.style.width = "fit-content";
    element.style.transition = "transform 3s";
    element.style.transform = "rotate(180deg)";
}
//onmouseenter() and onmouseleave() they works simillar as above two's
//there are many more events like-
// onunload() ->it calls on exit on website
//onmousedown(), onmouseup()
//onfocus() -> when you focus on any input text box, change its property
//onchange() ->if you change input text then you can modify your content


//EventListner's
//they handles and manages whichever event are adding by us
//we can add any event type by using eventlistner's methods which is-
//addEventListener()
//we can provide  multiple event on one element & also can provide same event on different element
//using addEventListener()
//we can remove any event also by using
//removeEventListner()
//they both takes two parameters first is event type, second is function of event

const btn = document.getElementById('mybtn');
btn.addEventListener("click", nameFunc);
btn.addEventListener('click', ageFunc);
// btn.addEventListener('resize', resizeText);
btn.removeEventListener('click', ageFunc);  //to remove any existing eventlistener we
                                            //can use removeEventListener()
                                            //which will take only two parameters,type & event name

var nameData;
var ageData; 
function nameFunc(){
    nameData = prompt("Enter your name: ");
}
function ageFunc(){
    ageData =  prompt("Enter your age: ");
    document.getElementById('details').innerHTML = "My name is " + nameData + " and age is " + ageData;
}
// function resizeText(){
//     btn.textContent.style.fontSize = "30px";
// }

window.addEventListener('load', check);     //here we use addEventListener() with window
function check(){
    alert("are you sure!");
}
