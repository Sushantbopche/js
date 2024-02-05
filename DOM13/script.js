let ulList=document.querySelector("ul")
let addbutton=document.querySelector('button')
let inputText=document.querySelector("input")

console.log(ulList)
console.log(addbutton)
console.log(inputText)

addbutton.addEventListener('click',function(){
    let text=inputText.value  //papaya
    newElement=document.createElement('li') //<li><li/>
    newElement.textContent=text //<li>papaya</li>
    ulList.appendChild(newElement)
    inputText.value=""
    document.querySelector('ul')
    console.log(ulList)
})