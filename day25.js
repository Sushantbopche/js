// // setting this keyword manually
// // bind,call ,apply

// // object 
// let info={
//     firstName:"sushant",
//     lastName:"bopche",
//     displayName:function(){
//      console.log(this.firstName + this.lastName)
//     }
// }
// let info2={
//     firstName:"shrushti",
//     lastName:"bhadoriya"
// }
let info3={
    firstName:"aniket",
    lastName:"thakre"
}
let info4={
    firstName:"utkarsh",
    lastName:"borker"
}
// console.log(info.firstName)
// console.log(info.lastName)
// info.displayName()

// let fn=info.displayName
// // let fn=function(){
//     //  console.log(this.firstName + this.lastName)
//     // }
// fn()

// fn=fn.bind(info2)
// // let fn=function(){
// console.log(info2.firstName + info2.lastName)
// // }
// fn()


// let fn=function(){
//     console.log(info3.firstName + info3.lastName)
// }
// fn=fn.bind(info3)
// // console.log(info3)
// fn()


let fn=function(){
    console.log(info4.firstName + info4.lastName)
}
fn=fn.bind(info4)
console.log(info4)
fn()

let car1={name:"BMW",color:"white"}
let car2={name:"audi",color:"blue"}
let car3={name:"skoda",color:"red"}
let car4={name:"polo",color:"matt black"}

 let displayColor=function(x){
    console.log(this.color)
    console.log(x)
}
// displayColor()
displayColor.call(car1,"hello")
displayColor.call(car2,"hi")
displayColor.call(car3,"bye")
displayColor.call(car4,"bye bye")

let car5={name:"BMW",color:"white"}
let car6={name:"audi",color:"blue"}
let car7={name:"skoda",color:"red"}
let car8={name:"polo",color:"matt black"}

let displayName=function(a,b,c,d,e){
    console.log(this.name)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
}
displayName.apply(car5,[11,22,33,44,55,-55])