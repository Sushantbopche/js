// lexical scope
function addA(){
    let a=10
    let b=55
    console.log(a+b)
    function addB(){
      let s=10
      let t=5
      console.log(s+t)
      console.log(a+b)
      function addc(){
        console.log(a+b+s+t)
      }
      addc()
    }
    addB()
}
addA()

// program2 
function addE(){
  let x=10
  let y=4
  return x+y
  console.log("hello")
}
let q2=addE()
console.log(q2)
// program3 closures

function addC(){
  let a=10
  let b=9
  return function(){
    console.log(a+b)
  }
}
let q3=addC()
console.log(q3)

// function declaration
function addE(x,y){
  return x+y
}
let q5=addE(12,13)
console.log(q5)

// function expression
let addFa=function(x,y){
  return x+y
}
let q6=addFa(10,3)
console.log(q6)

// arrow function
let addV=(x,y)=>{
  return x+y
}
let q8=addV(5,3)
console.log(q8)
console.log(addV)

// program4 closures
function addF(){
  let a=10
  let b=2
  return function(){
    return a+b
  }
}
let q9=addF()
// console.log(q9)     function anonaymous
// let q9=function(){
  // return a+b
// }
let q99=q9()
console.log(q99)
