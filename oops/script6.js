// single inheritance
class Students{
    constructor(fn,ln,age){
        this.firstName=fn
        this.lastName=ln
        this.age=age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Students{
    constructor(fn,ln,age,salary){
        super(fn,ln,age)
        this.salary=salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}
let sushant=new Teacher("sushant","bopche",22,10000)
console.log(sushant.firstName)
console.log(sushant.lastName)
console.log(sushant.age)
console.log(sushant.salary)
sushant.displayName()
sushant.displaySalary()

//program2
//multi-level
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
        console.log(this.sname + this.lastName)
    }
}
let aniket=new Son("nandkishor","bopche","narendra","sushant")
aniket.displayGName()
aniket.displayFName()
aniket.displaySName()

//program3

class Mother{
    constructor(fn,ln){
        this.firstName=fn 
        this.lastName=ln
    }
    displayMName(){
        console.log(this.firstName + this.lastName)
    }
}
class son extends Mother{
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname=sn
    }
    displaySName(){
        console.log(this.sname +this.lastName)
    }
}
class Daughter extends Mother{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname=dn
    }
    displayDName(){
        console.log(this.dname + this.lastName)
    }
}
let sushantB=new son("anita","bopche","sushant")
let priyaB=new Daughter("anita","bopche","priya")
console.log(sushantB)
console.log(priyaB)
sushantB.displaySName()
priyaB.displayDName()
