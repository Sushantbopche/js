class Person{
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
}
let anita=new Person()
console.log(anita)
anita.firstName="anita"
anita.lastName='bopche'
console.log(anita)

console.log(anita.firstName)
console.log(anita.lastName)