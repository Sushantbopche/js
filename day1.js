let balance = 0
console.log(balance);
balance = 100
console.log(100)

const pi = 3.12
console.log(pi)

let a = 11
let b = 10 
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

function calculator (a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
} 
calculator(12,11)
calculator(14,11)

//function without parameter and without return type

function addA(){
    console.log(9+9)
}
addA()
addA()
addA()


//function with parameter and without return type

function addB(x,y){
    console.log(x+y)
}
addB(10,9)
addB(215,210)

//function with parameter and with return type

function addC(x,y){
    return x+y
}
let q1=addC(13,5)
console.log(q1)
console.log(q1-5)
console.log(q1+5)
console.log(q1*0.10)


function subA(){
    console.log(10-5)
}
subA()
subA()

function subB(x,y){
    console.log(x-y)
}
subB(10,5)
subB(9,3)
subB(10,4)

function subC(x,y){
    return x-y
}
let q21=subC(8,5)
console.log(q21)
console.log(q21+q21)
console.log(q21*0.10)

//function declaration
function mulA(x,y){
    return x*y
}
let q3=mulA(12,3)
console.log(q3)

//function expression 
let mulB=function(x,y){
    return x*y
}
let q4=mulB(12,4)
console.log(q4)

//arrow function
let mulC=(x,y)=>{
    return x*y
}
let q5=mulC(12,5)
console.log(q5)


let divA = function(x,y){
    return x/y
}
let q123=divA(12,6)
console.log(q123)

function divB (x,y){
    return x/y
}
let q124 = divB(11,2)
console.log(q124)

let divC=(x,y)=>{
    return x/y
}
let q125=divC(11,9)
console .log (q125)
