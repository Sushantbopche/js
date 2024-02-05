// // object literal

// let chinmay={
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:33,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// chinmay.display()

// // program2

function Person(fn,ln,ag,rn){
      this.firstName=fn
      this.lastName=ln
      this.age=ag
      this.rollNo=rn
      // this.display=function(){
      //   console.log(this.firstName + this.lastName)
      // }
}
let amol=new Person("amol","rao",34,66)
// let chinmayk=new Person("chimayk","deshpande",32,34)
console.log(amol)
// console.log(chinmayk)

// Person.prototype.display=function(){
//   console.log(this.firstName + this.lastName)
// }
// // console.log(amol instance of person)
// // console.log(chinmayk insatnce of person)
// chinmayk.display()
// amol.display()


// Every object has one_proto_==parent.prtotype
console.log(amol._proto_ === Person.prototype)

// program2
let names=["chinmay","sushant","ram","sham"]
// console.log(names)
// names.push("shrushti")
// console.log(names)
console.log(names._proto_==Array.prototype)

Array.prototype.hello=function(){
  console.log("hi chinmay")
}
// program3

function Vehicle(cl,ty){
  this.color=cl
  this.type=ty
  // this.country="india"
  this.displayColor=function(){
    console.log(this.color)
  }
}
let maruti=new Vehicle("red","sedane")
let audi=new Vehicle("blue","SUV")
console.log(maruti)
console.log(audi)

Vehicle.prototype.country="India"
console.log(maruti.country)
console.log(audi.country)

// Es6 class

class personD{
  constructor(fn,ln,ag,rn){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.rollNo=rn
  }
  display(){
    console.log(this.firstName + this.lastName)
  }
}
let amol1=new personD("amol","rao",23,34)
let amol3=new personD("amol2","rao2",34,67)
console.log(amol1)
console.log(amol3)
amol1.display()
amol3.display()

// Object.create()
let obj={
  init:function(fn,ln,ag,rn){
    this.firstName=fn
    this.lastName=ln
    this.age=ag
    this.rollNo=rn
  },
  display:function(){
    console.log(this.firstName +this.lastName)
  }
}
let sushant=Object.create(obj)
console.log(sushant)
sushant.init("sushant","bopche",23,43)
console.log(sushant)
sushant.display()



