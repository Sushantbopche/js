// // function

// // function declaration

// function addition(x,y){
//     return x+y
// }
// let r1=addition(12,1)
// console.log(r1)

// // function expression

// let addition1=function(x,y){
//     return x+y
// }
// let r2=addition(12,4)
// console.log(r2)

// // arrow function

// let addition2=(x,y)=>{
//     return x+y
// }
// let r3=addition2(12,3)
// console.log(r3)

// // program4

// let info={
//     firstName:"sushant",
//     lastName:"bopche",
//     display:function(){
//         console.log(this)
//         console.log(this.firstName + this.lastName)
//     }
// }
// // console.log(info.firstName)
// // console.log(info.lastName)
// info.display()

// // program3

var firstName="ram"
var lastName="dani"

// let info3={
//     firstName:"shrushti",
//     lastName:"bhadoriya",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//         console.log(this) //info3

        // let display2=function(){
        //     // this ===> window
        //     console.log(this.fistName + this.lastName)
        // }
        // display2() //NaN
//     }
// }
// info3.display()

// program4

// let info4={
//     firstName:"sushant",
//     lastName:"bopche",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//         console.log(this)

//         let display2=()=>{
//             console.log(this.firstName + this.lastName)
//         }
//         display2() //sushantbopche
//     }
// }
// info4.display()

// program5

let info5={
     firstName:"sushant",
     lastName:"bopche",
     display:()=>{
        console.log(this.firstName + this.lastName)
        console.log(this)

        let display=()=>{
            console.log(this.firstName + this.lastName)
        }
        display() //NaN
     }
}
info5.display() //NaN