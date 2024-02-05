let headOne=document.querySelector('h1')
let byId=document.querySelector('#one')
let byclass=document.querySelector('.two')
let byAttri=document.querySelector("h1[name='nm']")

console.log(headOne)
console.log(byId)
console.log(byclass)
console.log(byAttri)
console.log(headOne.textContent)
//headOne.textContent="shrushti"

headOne.addEventListener('click',function(){
    headOne.textContent="shrushti"
    headOne.style.color="red"
    headOne.style.backgroundColor="yellow"
})