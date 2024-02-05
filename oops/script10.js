// lexical scope
function additionA(){
    let a=10
    let b=2
    console.log(a+b)
    function additionB(){
        let s=3
        let t=4
        console.log(s+t)
        console.log(a+b)
        console.log(a+b+s+t)
        function additionC(){
            let d=3
            let v=7
            console.log(a+b+s+t+d+v)
            console.log(d+v)
        }
        additionC()
    }
    additionB()
}
additionA()

// function declaration

function add(x,y){
    return x+y
}
let q1=add(4,6)
console.log(q1)

// function expression

let addC=function(x,y){
    return x+y
}
let ass=addC(2,2)
console.log(ass)

// arrow function

let addS=(x,y)=>{
    return x+y
}
let q4=addS(3,3)
console.log(q4)

// closures
let addA=function(x,y){
    return x+y
}
function addition(fn,x,y){
    // let fn=function(x,y){
    //     return x+y
    let c=fn(x,y)
    return c
}
let d=addition(addA,7,9)
console.log(d)

// closures

// function additionA(a,b){
//     return function(){
//        console.log(a+b)
//     }
// }
// let e=additionA(12,2)
// console.log(e)
// // let e=function(){
// //     console.log(a+b)
// // }
// e()

function info(){
    let firstName="sushant"
    let lastName="bopche"
    let displayName=function(){
        console.log(firstName+lastName)
    }
    let updateFirstName=function(newVal){
        firstName=newVal
    }
    return [displayName,updateFirstName,firstName]
}
let [a,b]=info()
a()
b("shrushti")
a()
