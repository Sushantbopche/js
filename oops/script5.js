class Person{
    constructor(fn,ln){
    this.firstName=fn
    this.lastName=ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Person{
    salary=10000
    displaySalary(){
        console.log(this.salary)
    }
}
let amol=new Teacher("sushant","bopche")
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.salary)
amol.displayName()
amol.displaySalary()

//program2
//single inheritance
class TeacherA{
    constructor(fn,ln,salary){
       this.firstName=fn
       this.lastName=ln
       this.salary=salary
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Professor extends TeacherA{
    constructor(fn,ln,salary,spec){
       super(fn,ln,salary)
        this.specialization=spec
    }
    displaySpec(){
        console.log(this.specialization)
    }
}
let sushantB=new Professor("priya","bopche",1212122,"marathi")
console.log(sushantB.firstName)
console.log(sushantB.lastName)
console.log(sushantB.salary)
console.log(sushantB.specialization)
sushantB.displayName()
sushantB.displaySpec()

//proram3

class Grandfather{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends Grandfather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname=ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}
class Son extends Father{
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname=ssn
    }
    displaySName(){
        console.log(this.sname +this.lastName)
    }
}
let shrushti=new Son("raju","bhadoriya","yadunath","shrushti")
console.log(shrushti.firstName)
console.log(shrushti.lastName)
console.log(shrushti.fname)
console.log(shrushti.sname)
shrushti.displayGName()
shrushti.displayFName()
shrushti.displaySName()



