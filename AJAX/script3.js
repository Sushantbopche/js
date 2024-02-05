let proone=new Promise(function(resolve,reject){
    let a=10
    let b=10

    if(a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
proone
.then(function(str){
    console.log(str)
    return "hello2"
})
.then(function(str2){
    console.log(str2)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})

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
            resolve("get id")
        },2000)
    })
}
function getInfo(){
    return new Promise(function(){
        setTimeout(function(){
            resolve("get info")
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
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log("bye")
})
.finally(function(){
    console.log("i will always execute")
})