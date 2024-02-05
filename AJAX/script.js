// sync code
// program1

function additionA(){
    console.log("additionA")
}
function additionB(){
    console.log("additionB")
}
additionA()
additionB()

// program2
// async code

// function additionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },3000)
// }
// function additionD(){
//     console.log("d is called")
// }
// additionC()
// additionD()

// program3
function getUserinfo(){
    setTimeout(function(){
        console.log("create user")
    },3000)
    setTimeout(function(){
        console.log("get id")
    },2000)
    setTimeout(function(){
        console.log("get info")
    },1000)
}
// getUserinfo()

// getUserinfo()
// async function=====>synccall back hell---->promises
// tightly coupled and not usable

function getUserinfo(){
    setTimeout(function(){
        console.log("user create")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
// getUserinfo()

// promises ===> reject,resolve,pending

// promises

let pro=new promise(function(resolve,reject){
    let a=10
    let b=10
    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
// consuming the promise
pro.then(function(str){
    console.log(str)
},
function(str){
    console.log(str)
})