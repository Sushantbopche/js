//program1

class student{
    firstName="sushant"
    lastName="bopche" 
    adharNo=123
    dsiplayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher{
    firstName="shrushti"
    lastName="bhadoriya"
    adharNo=123
    salary=10000

    displayName(){
        console.log(this.firstName + this.lastName)
    }
    displaySalary(){
        console.log(this.salary)
    }
}
let amol=new Teacher()
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.salary)
console.log(amol.adharNo)

amol.displayName()
amol.displaySalary()


let abc=new student()
console.log(abc.firstName)
console.log(abc.lastName)
console.log(abc.adharNo)

//program2
//now the right way to write the code 

class Student{
    firstName="narendra"
    lastName="bopche"
    adharNo=123

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class teacher extends Student{
    salary=100000
    displaysalary(){
        console.log(this.salary)
    }
}
let bbc=new teacher()
console.log(bbc.firstName)
console.log(bbc.lastName)
console.log(bbc.adharNo)
console.log(bbc.salary)

bbc.displayName()
bbc.displaysalary()

//program3

class Studentc{
    constructor(fn,ln,an){
        this.firstName=fn
        this.lastName=ln
        this.adharNo=an
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacherc extends Studentc{
    salary=1000
    displaySalary(){
        console.log(this.salary)
    }
}
let sushant=new Teacherc("pari","bopche",12123)
console.log(sushant.firstName)
console.log(sushant.lastName)
console.log(sushant.adharNo)
console.log(sushant.salary)
sushant.displayName()
sushant.displaySalary()

