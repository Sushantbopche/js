let info=["sushant","bopche",11,22]
// console.log(info[0])
// console.log(info[1])
// console.log(info[2])

// retrive by index
console.log(info[0])
// update
info[0]="shrushti"
console.log(info)
// add
info.push("pune")
console.log(info)
info.unshift("mr")
console.log(info)

// delete
info.pop()
console.log(info)
info.shift()
console.log(info)
info.splice(1,2)
console.log(info)

let numT=17
if(numT>0 && numT<=5){
    console.log("5% discount")
}
if(numT>5 && numT<=10){
    console.log("10% discount")
}
if(numT>10){
    console.log("20% discount")
}

// sswitch without break

let city="pune"
switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")   
    case "varanasi":
        console.log("UP")   
    default:
        console.log("incorret city name")      
}
//program2

let city2="pune"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "varanasi":
        console.log("UP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incoorect city name")    
}
//program4
let a=10
let b=50
let c=300
let isBiggest=true
switch(isBiggest){
    case(a>b && a>c):
    console.log("a is greater")
    break
    case(b>a && b>c):
    console.log("b is greater")
    break
    default:
        console.log("c is greater")
        
    
}
