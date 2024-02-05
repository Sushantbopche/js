let names=["sushant","shrushti","aniket"]
let[x,y,z]=names
console.log(x)
console.log(y)
console.log(z)

let states=[["wardha","nagpur"],["jaipur","udaipur"],["bhopal","indore"]]
let [[c1,c2],[c3,c4],[c5,c6]]=states
console.log(c1)
console.log(c2)
console.log(c5)
console.log(c6)

let info={
    city:"pune",
    person:{
        firstName:"sushant",
        lastName:"bopche"

    }
}
let {city:cy,person:{firstName:fn,lastName:ln}}=info
console.log(cy)
console.log(fn)
console.log(ln)

let information={
    firstName:"shrushti",
    lastName:"bhadoriya"
}
let{firstName,lastName}=information
console.log(firstName)
console.log(lastName)

let students=[
    {
        firstName:"sushant",
        lastName:"bopche"
    },
    {
        firstName:"shrushti",
        lastName:"bhadoriya"
    }
]
let[{firstName:f11,lastName:l22},{firstName:f22,lastName:l33}]=students
console.log(f11)
console.log(l33)

let info6={
    fullName:"sushant bopche",
    skills:["python","java","javascript"]
}
let{fullName:w3,skills:[w1,w2,w4]}=info6
console.log(w3)
console.log(w2)
console.log(w4)


// let array=[55,50,44,33,66,77,22]
// let q111=array.filter(function(el,index,arr){
//     return el>40
// })
// console.log(q111)
