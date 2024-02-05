let students=[
    {
        fullName:"sushant bopche",
        city:"nagpur",
        skills:["angular","python","react js","django"],
        age:26
    },
    {
        fullName:"shrushti bhadoriya",
        city:"mumbai",
        skills:["cypress","python","react js","js","selenium"],
        age:20
    },
    {
        fullName:"aniket thakre",
        city:"pune",
        skills:["sql","python","selenium"],
        age:33
    },
    {
        fullName:"pratik dhote",
        city:"wardha",
        skills:["testing","python","selenium"],
        age:34
    }
]
//program 1
//print full for every user
students.forEach(function(el){
    console.log(el.fullName)
})

//print fullName:number of skills
//shrushti bhadoriya:5

students.forEach(function(el){
    console.log(el.fullName+":" + el.skills.length)
})

//program 3
//print name of user with selenium

students.forEach(function(el){
    if(el.skills.includes("selenium")){
        console.log(el.fullName)
    }
})

//program 4
//add salesforce skill to every user
students.forEach(function(el){
    el.skills.push("salesforce")
})
console.log(students)
//progaram 5
// add working city value with banglore

students.forEach(function(el){
    el.workingCity="banglore"
})
console.log(students)

//program 6
//average age of all students
let totalsum=students.reduce(function(acc,el){
    return  el.age+acc
},0)
console.log(totalsum/students.length)

//program7
students.forEach(function(el){
    if(el.city == 'mumbai'){
        console.log(el.fullName)
    }
})

//program8 user with city pune

let studentss=students.filter(function(el){
     return el.city== "pune"
})
console.log(studentss)
studentss.forEach(function(el)
    {console.log(el.fullName)}
)

//program9
//print name of user starting with s

students.forEach(function(el){
    if(el.fullName.startsWith("s")){
        console.log(el.fullName)
    }
})
