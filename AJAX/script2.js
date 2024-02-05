// // program1
// // sync

// function addition(){
//     console.log("a")
// }

// function additionB(){
//     console.log("B")
// }
// addition()
// additionB()

// // program2

// function additionA(){
//     setTimeout(function(){
//       console.log("c")
//     },3000)
// }
// function additionC(){
//     console.log("D")
// }
// additionA()
// additionC()

// program3 

// user creter -----> get id ----> get info

// function getInfo(){
//     setTimeout(function(){
//       console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// getInfo()

function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
getInfo()

// // promises
// // pending , resolve,rejct

// let pro=new Promise(function(resolve,reject){
//      let a=10
//      let b=10

//      if(a==b){
//         resolve("hello")
//      }
//      else{
//         reject("bye")
//      }    
// })

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program2

// let pro= new Promise(function(resolve,reject){
//     let a=10
//     let b=10
//     if(a==b){
//         resolve([11,22,33])
//     }
//    else{
//     reject([-11,-22,-33])
//    }
// })
// pro.then(function(arr){
//     console.log(arr[0])
// },function(arr2){
//     console.log(arr2[1])
// })

// // program3

// let pro2=new Promise(function(resolve,reject){
//     let a=10
//     let b=10

//     if(a==b){
//         resolve("hello")
//     }
//     else{
//         reject("bye")
//     }
// })
// pro2.
// then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

let pro4=new Promise(function(resolve,reject){
    let a=10
    let b=5

    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
// consuming the promises

pro4
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always run")
})