// let x=10
// console.log(x)

// const h=100
// console.log(h)
// h=1000
// console.log(h) 

// var y=90
// console.log(y)
// y=9000
// console.log(y)

// difference between let ,const and var wrt scope
//let is blocked scope

// program2

// {
//     let k=100
    // console.log(k)     // 100
// }
// console.log(k)   //k is not defined

// program 3

// let k=900
// {
//     let k=100
//     console.log(k)
// }
// console.log(k)

// program4
// // let j=1000
// // {
// //     j=9000
// //     console.log(j) //here ans is 9000 coz let is not there ,so the vslue of j is updated, i.e 9000 
// // }
// // console.log(j)

// // program5

// // let l=1000
// // l=900
// // console.log(l)// 900
// // {
// //     let l=800
// //     l=600
// //     console.log(l)//600
// // }
// // console.log(l)//900

// //const is also blocked scope
// // progam5

// // {
// //     const h=1000
// //     console.log(h)
// // }
// // console.log(h)  no value coz h is not deffined

// // program6
// const h=1000
// {
//     console.log(h)
// }
// console.log(h)
// // program7

// // const h2=100
// // {
// //    h2=1000
// //     console.log(h2)
// // }
// // console.log(h2)   here assaignment is const  variable,it wont run

// // program8

// const h2=7000
// {
//     const h2=100
//     console.log(h2) //100
// }
// console.log(h2) //7000

// // program9

// // var is function scoped

// var h3=100
// function addC(){
//     console.log(h3) //100
//     h3=99
//     console.log(h3) //99
// }
// console.log(h3) //100
// addC()
// console.log(h3) //99

// program 10

var h4=80
function addB(){
    var h4=88
    console.log(h4)
}
// {
//     let h4=66
//     console.log(h4)
// }
// console.log(h4)