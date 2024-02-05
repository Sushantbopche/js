//map

//key - value
//key - vlaue

let info={
    firstName:"sushant",
    lastName:"bopche"
}
//obj------> key--------> string
//map------> key -------->key can be any datatype(boolean,number,array)

let mapA=new Map()
let mapB=new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"support"]
])
console.log(mapB)

//clear()

//  mapB.clear()
//  console.log(mapB)

// //delet
// mapB.delete(2)
// console.log(mapB)

//has 
let q1=mapB.has(1)
let q2=mapB.has(2)
console.log(q1)
console.log(q2)

//set()
//adding the element()
mapB.set(4,"manager")
console.log(mapB)
mapB.set(4,"employee")
console.log(mapB)


let q3=mapB.size
console.log(q3)

//forEach

mapB.forEach(function(v,k){
    console.log(v,k)
})

// for(let val of mapB.values()){
//     console.log(val)
//}
// for(let key of mapB.keys()){
//     console.log(key)
// }
for(let[k,v]of mapB.entries()){
    console.log(k,v)
}











