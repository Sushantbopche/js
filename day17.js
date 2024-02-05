let students=[
    {
        firstName:"sushant",
        lastName:"bopche",
        skills:["python","javascript","c#"],
        age:23
    },
    {
        firstName:"shrushti",
        lastName:"bhadoriya",
        skills:["python","javascript","django"],
        age:22
    },
    {
        firstName:"aniket",
        lastName:"thakre",
        skills:["python","javascript","playwright"],
        age:22
    }
]
//console.log(students[0].firstName + students[0].lastName)

//for(let i=0;i<students.length;i++){
   // console.log(i)
//console.log(students[i].firstName + students[i].lastName)
//}

students.forEach(function(el,index,arr){
    console.log(el.firstName + el.lastName)
})