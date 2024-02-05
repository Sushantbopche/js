//map used for itrating over each element of array and given changes and
// returns new array does not make changes in orginal array
let birthyear=[1989,1990,1991,1992]
let q1=birthyear.map(function(el,index,arr){
    return 2023-el
})
console.log(q1)

let numbers=[55,66,77,99,33,44,55,66,99,22]
let q2=numbers.map(function(el,index,arr){
    return el+10
})
console.log(q2)

//program2
//filter //filter outs the elemts returning true condition
let marks=[11,22,33,44,55,66,77,88,99,100]
let q3=marks.filter(function(el,index,arr){
    return el>60
})
console.log(q2) 

//program3
//reduce it returns single value
let mks=[11,22,33]
let q4=mks.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(q4)

//program4
//forEach //it is like a for loop
console.log("forEach");
let cities=["pune","banglore","kolkata","chennai"]
let q5=cities.forEach(function(el,index,arr){
    console.log(" welcome "+el)
})
console.log(q5)//this one is  undefined

//program5
//find()returns value of true element
//               0  1  2  3  4   5   6   7
let transaction=[11,22,33,44,11,-55,66,-44]
let q6=transaction.filter(function(el,index,arr){
    return el<0
})
console.log(q6)


let q7=transaction.find(function(el,index,arr){
    return el<0
})
console.log(q7)//starts form left side and finds the first true element

//findInddex 
let q8=transaction.findIndex(function(el,index,arr){
    return el<0
})
console.log(q8)//it finds the index of element //41 no

//proogram6
//every
//returns true if every element passes the tests
let numA =[11,66,77,88,44,55,66,77,88,30]
let q9=numA.every(function(el,index,arr){
    return el>10
})
console.log(q9)

//some
//returns true if one of  element passes the tests
let q10=numA.some(function(el,index,arr){
    return el>800
})
console.log(q10)

//push// adds element at last and returns the length
let fruits=["apple","mango","banana","grapes"]
console.log(fruits.length)
let q11=fruits.push("chikoo")
console.log(fruits)
console.log(q11)

//unshift//adds the elemnt at start and returns the updated length
let q12=fruits.unshift("papaya")
console.log(fruits)
console.log(q12)

//pop() //eliminates the last element and returns it

let q13=fruits.pop()
console.log(fruits)
console.log(q13)

//shifft // it eliminates the 0 th index element and returns it
let q14=fruits.shift()
console.log(fruits)
console.log(q14)

//includes //it gives boolean value
let q15=fruits.includes("mango")
console.log(q15)

let number=[12,44,55]
let q18=number.reduce(function(acc,el,index,arr){
     return acc+el
},0)
console.log(q18)


