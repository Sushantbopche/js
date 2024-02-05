let headOne=document.querySelector('h1')
let inputText= document.querySelector('input')
let buttonA=document.querySelector('button')

console.log(headOne)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let colorText=inputText.value
    headOne.style.color= colorText
    inputText.value=""

})
