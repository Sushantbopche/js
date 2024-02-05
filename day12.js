//                  0                    1                     2
//              0      1          0        1            0         1
let states=[["pune","nagpur"],["jaipur","uadaipur"],["kanpur","varanasi"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][0])

//flat
let q1=states.flat()
console.log(q1)

//slice
//            0        1           2        3     4          5
let names=["sushant","shrushti","anita","priya","aniket","narendra"]
//             -6       -5         -4     -3      -2       -1
//names.slice(startIndex,endInddex(not included))
console.log(names.slice(2))
console.log(names.slice(1,5))
console.log(names.slice(-5))
console.log(names.slice(1,-1))
console.log(names.slice(-5,4))


//index

let cities=["nagpur","pune","chennai","kolakata"]
let q2=cities.indexOf("nagpur")
let q3=cities.indexOf("Nagpur")
console.log(q2)
console.log(q3)

//concat

let fruits=["apple","mango","banana"]
let fruitsB=["chikoo","grapes"]
let fruitsE=fruits.concat(fruitsB)
console.log(fruitsE)

//at
let country=["india","pakistan","srilanka","bangladesh"]
let q4=country.at(2)
console.log(q4)

//reverse
let q5=country.reverse()
console.log(q5)

//sort
 country.sort()
 console.log(country)

 //fill
 

 let marks=[55,66,77,88,99,100,99,44,77,11]
marks.fill('*',2,9)
console.log(marks)
//join
let info=["sushant","shrushti","9284344324"]
let q6=info.join("* ")
console.log(q6)

//splice
let studs=["sushant","shrushti","aniket","pratik"]
// studs.splice(2,1)
// console.log(studs)

studs.splice(2,2,"ninad","abhijeet","ram","sham")
console.log(studs)









