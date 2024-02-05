function additionA(){
    console.log("Hello world")
}
additionA()

function additionB(){
    console.log("HEllo world B")
}
additionB()

// program2

// function additionD(){
//     setTimeout(function(){
//         console.log(" D is called")
//     },3000)
// }
// function additionc(){
//     console.log("c is called")
// }
// additionD()
// additionc()

// program3
// async

// user creat------ id ---- id info

function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)
    setTimeout(function(){
        console.log("get id")
    },2000)
    setTimeout(function(){
        console.log('get info by id')
    },1000)
}
// getInfo()

// program4
// call back hell
// async---- sync--- help

function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info by id")
            },1000)
        },2000)
    },3000)
}
// getInfo()

let pro=new Promise(function(resolve,reject){
    let a=10
    let b=5
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
},function(str){
    console.log(str)
})

// program6
// let pro2=new Promise(function(resolve,reject){
//     let a=10
//     let b=5
//     if(a==b){
//        resolve([11,22,33,44])
//     }
//     else{
//         reject([55,66,77,88])
//     }
// })
// pro2.then(function(arr){
//     console.log(arr[0])
// })
// .catch(function(arr){
//     console.log(arr[1])
// })


// program7
let pro3=new Promise(function(resolve,reject){
    let firstName="sushant"
    if(firstName.startsWith('s')){
        resolve("starts with s")
    }
    else{
        reject("does not staart with s")
    }
})
pro3.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})

// /prorgam8
let pro4=new Promise(function(resolve,reject){
     let a=10
     let b=10
     if(a==b){
        resolve("hello")
     }
     else{
        reject("bye")
     }
})
pro4
.then(function(str){
    console.log(str)
    return str + "sushant"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log('i will always execute')
})



