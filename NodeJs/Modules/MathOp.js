const add = (a, b) =>{
    return a + b;
}

const sub = (a, b) =>{
    return a - b;
}

//to use them as a module we have to export them in 
//module.export

module.exports = {
    add, 
    sub,
}