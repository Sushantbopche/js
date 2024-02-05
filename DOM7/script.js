let headOne=document.querySelector("h1")
let buttonA=document.querySelector("button")

buttonA.addEventListener('click',function(){
    headOne.textContent=headOne.textContent.toUpperCase()
    headOne.style.color="orange"
})