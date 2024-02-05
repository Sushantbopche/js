let ulList=document.querySelector("ul")
let buttonA=document.querySelector("button")
let inputText=document.querySelector('input')

buttonA.addEventListener('click',function(){
    let fruitsText=inputText.value
    let newList= document.createElement('li')
    newList.textContent=fruitsText
    ulList.appendChild(newList)
    inputText.value=""

})
