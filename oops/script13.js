// declartion

function addition(x,y){
    return x+y
}
let add=addition(12,4)
console.log(add)

//  function expression

let additionA=function(x,y){
    return x+y
}
let q1=additionA(12,1)
console.log(q1)

// arrow function
let additionC=(x,y)=>{
    return x+y
}
let q2=additionC(12,12)
console.log(q2)

let info={
    firstName:"sushant",
    lastName:"bopche",
    display:function(){
        console.log(this)
        console.log(this.firstName+ this.lastName)
    }
}
info.display()