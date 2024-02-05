//number as parameter and number as return type

function add(x,y){
    return x+y
}
let q1=add(12,14)
console.log(q1)
console.log(typeof(q1))

//string as parameter and string as return type

function greet(word){
    return "good" + word
}
let q2=greet("morning")
console.log(q2)
console.log(typeof(q2))

//boolean as parameter and boolean as return type

function canDrive(age,vehicleAvail){
    if(age>=18 && vehicleAvail ){
        return true
    }
    else{
        return false
    }
}
let q3=canDrive(18,false)
console.log(q3)

// array as parameter and array s return type
let cities=["pune","mumbai","banaglore"]
function addCity(lst,ele){
    lst.push(ele)
    return lst
}
let q4=addCity(cities,"wardha")
console.log(q4)

// object as parameter and obj as return type
let info={
    firstName:"sushant",
    lastName:"bopche"
}
// dot notation and bracket notation
function addLanguage(obj,lang){
    obj.language=lang
    return obj
}
let q5=addLanguage(info,"marathi")
console.log(q5)

// function as paarameter and function ad return type

// let x=10
// console.log(x)

let addA=function(x,y){
    return x+y
}
function addition(fn,x,y){
    // let x=12
    // let y=4
    // let fn=function(x,y){
    //    return x+y
    // }
    let q7=fn(x,y)
    return q7
}
let q8=addition(addA,12,4)
console.log(q8)
console.log(typeof(q8))

// set as parameter and set as return type
let mapA=new Map()
let mapB=new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"support"]
])
console.log(mapB)

let q6=mapB.set(4,"employee")
console.log(q6)

// map as parameter and map as retun type

