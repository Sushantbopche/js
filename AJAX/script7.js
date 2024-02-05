// index2=script7

// function fetchUser(id){
//     return fetch(`https://reqres.in/api/users?page=${id}`)
//     .then(function(response){
//         console.log(response)
//         if(response.ok){
//             return response.json()
//         }
//         return new Error('request was not successful')
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
// fetchUser(2)

// promise combinator
function fetchUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
}
fetchUser(3)

function getUser2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let a=10
            let b=5
            if(a==b){
                resolve("hello")
            }
            else{
                reject("bye")
            }
        },1000)
    })
}

// Promise.all([
//     fetchUser(1),
//     fetchUser(2),
//     fetchUser(3),
//     getUser2() //error
// ])
// .then(function(response){
//     console.log(response)
// })

// promise.allSettled

// Promise.allSettled([
//     fetchUser(3),
//     fetchUser(1),
//     getUser2()
// ])
// .then(function(response){
//     console.log(response)
// })
// Promise.allSettled()

// promise.race()

// Promise.race([
//     fetchUser(3),
//     getUser2()
// ])
// .then(function(response){
//     console.log(response)
// })
// Promise.race()

// promise.any()

Promise.any([
    getUser2(),
    getUser2(),
    fetchUser(2),
    fetchUser(1)
])
.then(function(response){
    console.log(response)
})
Promise.any()


