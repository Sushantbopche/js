let sushant={
    firstName:"sushant",
    lastName:"bopche",
    age:22,
    rollNO:30
 }
let shrushtia={
    firstName:"shrushti",
    lastName:"bhadoriya",
    age:22,
    rollNo:29
}
class person{
    constructor(fn,ln,age,rollNo){
        this.firstName=fn
        this.lastName=ln
        this.age=age
        this.rollNo=rollNo
    }
}
let shrushtiA=new person("shrushtiA","bhadoriya",21,29)
    console.log(shrushtiA)
let sushanta=new person("sushanta","bopche",22,30)
console.log(sushanta)

class Person{
    setfirstName(fn){
        this.firstName=fn
    }
    setlastName(ln){
        this.lastName=ln
    }
    setage(age){
        this.age=age
    }
    setrollNo(rollNo){
        this.rollNo=rollNo
    }
}
let sushantB=new Person()
console.log(sushantB)
sushantB.setfirstName("sushantB")
console.log(sushantB)
sushantB.setlastName("bopche")
console.log(sushantB)