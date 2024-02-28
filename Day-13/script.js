//pollyfil methods

//pollyfil of map()

const arr = [1, 2, 3, 4, 5, 6];
let result1 = arr.map((e)=>{
    return e * 2;
})

Array.prototype.pollyfilmap = function (callback){
    let r = [];
    for(let i =0; i<this.length; i++){
        r.push(callback(this[i], i, this))
    }
    return r;
}

let result2= arr.pollyfilmap((e)=>{return e * 2})

console.log(result1, result2)