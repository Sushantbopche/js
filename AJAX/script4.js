// // function getUser(){
// //     setTimeout(function(){
// //         console.log("user create")
// //     },3000)
// // }
// // setTimeout(function(){
// //     console.log("get id")
// // },2000)
// // setTimeout(function(){
// //     console.log("get info")
// // },1000)
// // getUser()

// // // call back hell

// // function info(){
// //     setTimeout(function(){
// //         console.log("create user")
// //         setTimeout(function(){
// //             console.log("geet id")
// //             setTimeout(function(){
// //                 console.log("get info")
// //             },1000)
// //         },2000)
// //     },3000)
// // }
// // info()

// // solution promises
// // resolve,reject,pending

// let pro=new Promise(function(resolve,reject){
//     let a=10
//     let b=10
//     if(a==b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
// // consuming the promise
// // pro.then(function(str){
// //      console.log(str)
// // },function(str){
// //     console.log(str)
// // })

// // promise2

// // pro.then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })

// // promise3

// // pro
// // .then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log("i will always execute")
// // })


// // program4
// pro.then(function(str){
//     console.log(str)
//     return "bye"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })

// function info(){
//     setTimeout(function(){
//         console.log("create user")
//         setTimeout(function(){
//             console.log("geet id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
// info()

// function createUser(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("user create")
//         },3000)
//     })
// }
// function getId(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("get id")
//         },2000)
//     })
// }
// function getInfo(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//           resolve("get info")
//         },1000)
//     })
// }

// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(){
//     console.log(str)
// })
// .catch(function(){
//     console.log("rejected")
// })
// .finally(function(){
//     console.log("i will always run")
// })

// async function getUser(){
//     let p1=await createUser()
//     console.log(p1)
//     let p2=await getId()
//     console.log(p2)
//     let p3=await getInfo()
//     console.log(p3)
// }
// getUser()