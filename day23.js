let info={
    firstName:"sushant",
    lasstName:"bopche"
}
console.log(info)

//Map also stories the data in key value or property value pair
//But key or propertty can be any data type

let roles= new Map()
console.log(roles)

let roleB=new Map(
[
    [1,'admin'],
    [2,"manager"],
    [3,"customer"],
    [4,"support"]
]
)
console.log(roleB)

//size 
let a1=roleB.size
console.log(a1)

//has()roleB.has(2)
let a2=roleB.has(2)
console.log(a2)

//get()
let a3=roleB.get(3)
console.log(a3)

//delet()
roleB.delete(2)
console.log(roleB)

//set ----- add and update
roleB.set(5,"employee")
console.log(roleB)

roleB.set(1,'admin-admin')
console.log(roleB)

//clear()
// roleB.clear()
// console.log(roleB)

//loops

roleB = new Map(
    [
        [1,"admin"],
        [2,"manager"],
        [3,"customer"],
        [4,"support"]
    ]
)
roleB.forEach(function(val,key){
  console.log(val,key)
})

for(let key of roleB.keys()){
    console.log(key)
}
for(let val of roleB.values()){
    console.log(val)
}
for(let[key,val]of roleB.entries()){
    console.log(key,val)
}

//Set
//set does not allow duplicate value
let setA=new Set()
console.log(setA)


setA.add(11)
setA.add(22)
setA.add(33)
setA.add(44)
setA.add(11)
console.log(setA)

// setA.clear()
// console.log(setA)
let q1=setA.has(33)
console.log(q1)
q2=setA.has(55)
console.log(q2)


