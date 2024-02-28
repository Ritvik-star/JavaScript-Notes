function myFunc(){
    console.log("function called");
    const fullName = document.getElementById('fullName').value; //getting the user name
    console.log("user name : "+fullName);
    document.getElementById('myName').innerHTML = "Your name is : " + fullName;

    let selection = document.forms['myForm']['vehicleType'].value;
    document.getElementById('myVehicle').innerHTML = "Your vehicle is : " + selection;  //by using this way we can get the radio values

    // const isChecked = document.getElementById('travel').checked
    // console.log(isChecked);  //if we want check that value is checked or not then we can use this way

    const hobbies = document.forms['myForm']['hobby'];
    hobbies.forEach(hobby => {
        if(hobby.checked){
            console.log("selected user hobby : "+hobby.value);
            document.getElementById('myHobby').innerHTML = "Your hobby is : " + hobby.value;
        }
    }); //this is how we can get the value of checkbox
    return false;
}