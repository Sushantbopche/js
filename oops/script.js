// program1
// //object literal

// let sushant={
//     firstName:"sushant",
//     lastName:"bopche",
//     age:22,
//     rollNo:33,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// sushant.displayName()

// let shrushti={
//     firstName:"shrushti",
//     lastName:"bhadoriya",
//     age:22,
//     rollNo:32,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// shrushti.displayName()

// console.log(shrushti.firstName)
// console.log(shrushti['firstName'])

//program2

// class Person{
//     firstName
//     lastName
//     age
//     rollNo
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let shrushti=new Person()
// let sushant= new Person()
// console.log(shrushti)
// console.log(sushant)

// shrushti.firstName="shrushti"
// shrushti.lastName="bhadoriya"
// shrushti.age=22
// shrushti.roll=32
// shrushti.city="banglore"
// //console.log(shrushti)

// sushant.firstName="sushant"
// sushant.lastName="bopche"
// sushant.age=22
// sushant.roll=33

//program2
//constructor

class Person{
    constructor(fn,ln,ag,rn){
        this.firstName=fn
        this.lastName=ln
         this.age=ag
         this.rollNo=rn
     }
     displayName(){
         console.log(this.firstName + this.lastName)
     }
 }
 let shrushtiB=new Person("shrushti","bhadoriya",21,32)
let sushantB= new Person("sushant","bopche",22,33)
 console.log(shrushtiB)
 console.log(sushantB)
 shrushtiB.displayName()
 sushantB.displayName()
 sushantB.city="banglore"

//program3

class Person2{
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    setAge(ag){
        this.age=ag
    }
    setRollNo(rn){
        this.rollNo=rn
    }
    displayName(){
        console.log(this.firstName+this.lastName)
    }
}
let sushant1=new Person2()
console.log(sushant1)
sushant1.setFirstName("sushant1")
sushant1.setLastName("bopche1")
sushant1.setAge(22)
sushant1.setRollNo("33")
sushant1.displayName()



