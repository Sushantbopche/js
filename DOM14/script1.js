function getUser(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response.data)

    response.data.forEach(function(el){
        document.write(`<h1>${el.id}</h1>`)
        document.write(`<p>${el.first_name}${el.last_name}</p>`)
        document.write(`<p>${el.email}</p>`)
        document.write(`<img src=${el.avatar}>`)
    })    
    })
}
getUser(2)