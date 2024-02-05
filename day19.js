class Person{
    firstName;
    lastName;
    age;
    rollNo;
}
let sushant= new Person()
console.log(sushant)
sushant.firstName="sushant"
sushant.lastName="bopche"
sushant.age=23
sushant.rollNo=55
console.log(sushant)

//program3

class PersonC{
    constructor(fn,ln,age,rollNo){
        this.firstName=fn
        this.lastName=ln
        this.age=age
        this.rollNo=rollNo
    }
}
let sushantC=new PersonC("sushant","bopche",22,33)
console.log(sushantC)
let shrushtiC=new PersonC("shrushti","bhadoriya",21,32)
console.log(shrushtiC)

sushantC.language="marathi"
console.log(sushantC)