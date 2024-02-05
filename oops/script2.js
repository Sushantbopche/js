class Person{
    constructor(fn,ln,ag,roll){
        this.firstName=fn
        this.lastName=ln
        this.age=ag 
        this.roll=roll
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let shrushti=new Person("shrushti","bhadoriya",22,33)
console.log(shrushti)
shrushti.displayName()

class PersonB{
    setFirstName(fn){
        this.firstName=fn
    }
    setLastName(ln){
        this.lastName=ln
    }
    setAge(age){
        this.age=age
    }
    setRollNo(rn){
        this.rollNO=rn
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let sushant=new PersonB()
// console.log(sushant)
sushant.setFirstName("sushant")
sushant.setLastName("bopche")
sushant.setAge(21)
sushant.setRollNo(33)
console.log(sushant)
sushant.displayName()

class PersonC{
    set firstName(fn){
        this.first_name=fn
    }
    get firstName(){
        return this.first_name
    }
    set lastName(ln){
        this.last_name=ln
    }
    get lastName(){
        return this.last_name
    }
    set rollNo(rn){
        this.roll_no=rn
    }
    get rollNo(){
        return this.roll_no
    }
    set Age(ag){
        this.age=ag
    }
    get Age(){
        return this.age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let abc=new PersonC()
console.log(abc)

abc.firstName="priya"
abc.lastName="bopche"
abc.rollNo=22
abc.Age=18

console.log(abc.firstName)
console.log(abc.lastName)
console.log(abc.Age)
console.log(abc.rollNo)

console.log(abc.firstName)
console.log(abc)






