// // function additionA(){
// //     console.log("hello")
// // }
// // additionA()

// // function additionB(){
// //     console.log("Hello b")
// // }
// // additionB()

// // function additionD(){
// //    setTimeout(function(){
// //     console.log("time in")
// //    },3000)
// // }
// // function additionC(){
// //     console.log("c is called")
// // }
// // additionD()
// // additionC()


// function getInfo(){
//      setTimeout(function(){
//         console.log("user created")
//      },3000)
//      setTimeout(function(){
//         console.log("get id")
//      },2000)
//      setTimeout(function(){
//         console.log("get info")
//      },1000)
//     }
//     // getInfo()

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
// // getInfo()
let pro=new Promise(function(resolve,reject){
    let a=10
    let b=10
    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function (str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// pro.then(function(str){
//     console.log(str)
//     return str + 'sushant'
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//  console.log("i will run")
// })

function userCreated() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)
    })
    return pro
}

function UserId() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get id")
        }, 2000)
    })
    return pro
}
function getInfo() {
    let pro = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get info")
        }, 1000)

    })
    return pro
}
// userCreated()
// UserId()
// getInfo()
// 


// async await

async function getUserInformation(){
    let one=await userCreated()
    console.log(one)
    let two=await UserId()
    console.log(two)
    let three=await getInfo()
    console.log(three)
}
getUserInformation()





