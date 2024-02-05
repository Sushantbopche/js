// const makeFetchRequest=async(endpoint)=>{
//     const response=await fetch(`https://reqres.in/api/users/${endpoint}`);

//     if (!response.ok){
//         throw new Error(`HTTP error ! Status: ${response.status}`);
//     }
//     return response.json()
// };

function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
        return response.data
    })
}
// getUserPageWise(1)

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        return response.data
    })
}
// getSingleUser(2)

function renderHtml(user){
    document.write(`<h1>${user.first_name}${user.last_name}</h1>`)
    document.write(`<p>${user.email}${user.id}</p>`)
    document.write(`<img src=${user.avatar}>`)
}

// using then

// getUserPageWise(1)
// .then(function(users){
//     let id=users[0].id
//     return getSingleUser(id)
// })
// .then(function(user){
//     // console.log(user)
//     renderHtml(user)
// })

// async await
// async function getInfo(pageNumber){
//     let users=await getUserPageWise(pageNumber)
//     let id=users[0].id
//     let user=await getSingleUser(id)
//     renderHtml(user)
// }
// getInfo(2)

// Promise.all()
// async function PromiseAny(){
//     let users=await Promise.all([
//        Promise.resolve('hello'),
//     //    Promise.reject('hello2'),
//        Promise.resolve('hello3')
//     ])
//     console.log(users)
// }
// PromiseAny()

// programa2
function addtime(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hello")
    },3000)
  })
}
function addtime2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("bye")
        },2000)
    })
}
async function Promiserace(){
    let a=await Promise.race([
        addtime(),
        addtime2()
    ])
    console.log(a)
}
Promiserace()


//  promise.any()
// share-1 second ----->3 sec

async function promiseAny(){
    let c=await Promise.any([
      Promise.reject("bye"),
      Promise.resolve("hello"),
      Promise.reject("hello2")
    ])
    console.log(c)
    }
    promiseAny()

// promsise .allsettled
async function PromiseAllSettled(){
    let b=await Promise.allSettled([
        Promise.reject("bye"),
        Promise.resolve("hello"),
        Promise.resolve("hello")
    ])
    console.log(b)
}
PromiseAllSettled()











