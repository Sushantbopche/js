let birthyear=[1989,1990,1991,1992]
let ages=[]
for (let i=0;i<4;i++){
   // console.log(i)'
  // console.log(birthyear[i])
  //console.log(2023-birthyear[i])
  let x=2023-birthyear[i]
  ages.push(x)
}
console.log(ages)

//program2
birthyear=[1989,1990,1991,1992]
let q1=birthyear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023-el
})
console.log(q1)

//program3
let numbers=[11,22,33,44,55,66]
let q2=numbers.map(function(el){

    return el+2
})
console.log(q2)

//program4
let marks=[55,66,77,88,33,44]
let above60=[]
for (let i=0;i<6;i++){
   // console.log(i)
  // console.log(marks[i])
  if(marks[i]>60){
    above60.push(marks[i])
  }
}
console.log(above60)

//program4
marks=[55,66,77,88,33,44]
let q3=marks.filter(function(el,index,arr){

    return el>60
})
console.log(q3)

//program5
let numberb=[11,22,33]
let total=0
for(let i=0;i<3;i++){
    //console.log(i)
    total=total+numberb[i]
}
console.log(total)

//program6
numberb=[11,22,33]
let q5=numberb.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(q5)






