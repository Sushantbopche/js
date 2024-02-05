let firstName="sushant"
let lastName="bopche"

//my fistname is sushant my last name is bopche
console.log("my firstname is"+firstName+"my last name is"+"lastName")

//string interpolation
//let city="pune"
//let city1='pune'
//let city2= `pune`

console.log(`my firstname is ${firstName} and my lastname is ${lastName}`)

let city="nagpur"
for (let i=0;i<city.length;i++){
    console.log(city[i])
}

for (let i=city.length-1;i>=0;i--){
    console.log(city[i])
}

//rupgan
let city1="nagpur"
let str=""
for(let i=0;i<city1.length;i++){
    str=city1[i]+str
}
console.log(str)

//n+""=n
//a+n=an
//g+an=gan
//p+gan=pgan
//u+pgan=upgan
//r+upgan=rupgan

 str = ""
 for(let i=city1.length-1;i>=0;i++){
    str=city1[1]+str
 }
 console.log(str)

 
let info={
    firstName:"sushant",
    lastName:"bopche"
}
//retrive 
info.firstName="shrushti"
console.log(info)
   
