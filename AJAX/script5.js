// asnychronise javascript and xml

// function additionA(){
// //     setTimeout(function(){
// //         console.log("c")
// //     },3000)
// // }
// // function additionB(){
// //    console.log('B')
// // }
// // additionA()
// // additionB()

// function getUser(){
//     setTimeout(function(){
//         console.log("create id")
//     },3000)
//     setTimeout(function(){
//         console.log("get Id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// // getUser()

// // call back hell

// function getInfo(){
//     setTimeout(function(){
//         console.log("user create")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()

// promises
// let pro=new Promise(function(resolve,reject){
//     let a=10
//     let b=1
//     if(a==b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
// consuming the promises
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
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })
// function getInfo(){
//     setTimeout(function(){
//         console.log("create user")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user create")
        },3000)
    })
}
function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getid")
        },2000)
    })
}
function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getinfo")
        },1000)
    })
}
createUser()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return getInfo()
})
.then(function(){
    console.log(str)
})
.catch(function(){
    console.log('rejected')
})
.finally(function(){
    console.log("i will alwayd run")
})