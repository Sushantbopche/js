// object literal
// let amol={
//     firstName:"sushant",
//     lastName:"bopche",
//     age:34,
//     rollNo:32
// }
// retrive
// update
// add
// delet


// function constructor

// function person(fn,ln,ag,rn){
//     this.firstName=fn
//     this.lastName=ln
//     this.age=ag
//     this.rollNo=rn
// }
// let sushant=new person("sushant","bopche",34,44)
// console.log(sushant)

// // ES6 class
// class Person{
//     firstName
//     lastName
//     age
//     rollNo
// }
// let sushantb=new Person()
// console.log(sushantb)
// accessing the property and updating it outside the class
// sushantb.firstName="shrushti"
// sushantb.lastName="bhadoriya"
// sushantb.age=44
// sushantb.rollNo=32
// console.log(sushantb)

// Es6 class with constructor

// class PersonA{
//     constructor(fn,ln,ag,rn){
//         this.firstName=fn
//         this.lastName=ln
//         this.age=ag
//         this.rollNo=rn
//     }
// }
// let shrushti=new PersonA("aniket","thakre",23,34)
// console.log(shrushti)

// object.create

// let aniket=Object.create({})
// console.log(aniket)
// aniket.firstName="aniket"
// aniket.lastNaame="thakre"
// aniket.age=23
// aniket.rollNo=33
// console.log(aniket)

// object literal

let sushant={
    firstName:"sushant",
    lastName:"bopche",
    display:function(){
        console.log(this.firstName + this.lastName)
    }  
}
let shrushti={
    firstName:"shrushti",
    lastName:"bhadoriya",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
sushant.display()
shrushti.display()

// function constructor

function persona(fn,ln){
    this.firstName=fn
    this.lastName=ln
    this.display=function(){

    console.log(this.firstName+this.lastName)
}
}
let aniket=new persona("aniket","thakre")
let sushantk=new persona("sushant","bopche")
// console.log(aniket)
// console.log(sushant)
aniket.display()
sushant.display()

// prototype inheritance
// every object has one_proto_==parent.prototype

// console.log(aniket._proto_ == persona.prototype)

function peronK(fn,ln){
    this.firstName=fn
    this.lastName=ln
}
let sushantB=new peronK("sushantk","bopchek")
let chinmayk=new peronK("chinmay","deshpande")
console.log(sushantB)
console.log(chinmayk)

peronK.prototype.display=function(){
    console.log(this.firstName+this.lastName)
}
sushant.display()
chinmayk.display()

// prototype inheritance
// // evry obbject has one_proto_ == parent.prototype
// console.log(sushant._proto_==peronK.prototype)

Array.prototype.hello=function(){
    console.log("minskole")
}
let names=["sushant","ram","sham"]
console.log(names)
names.hello()
console.log(names._proto_ == Array.prototype)



