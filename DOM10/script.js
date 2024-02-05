let ulList=document.querySelector('ul')
let inputText=document.querySelector('input')
let buttonA=document.querySelector('#addButton')

 buttonA.addEventListener('click',function(){
    let txt=inputText.value
    let newE=document.createElement('li')//<li><li/>
    newE.textContent=txt //<li>papaya</>
    creatButtons(newE)
    ulList.appendChild(newE)
    inputText.value=""
})

function creatButtons(li){
    let r = document.createElement('button') //<button></button>
    r.textContent="Remove"//<button>Remove</button>
    r.classList.add("remove")//<button class="remove">Remove</>
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent="Up"
    u.classList.add("up")
    li.appendChild(u)
    
    let d=document.createElement("button")
    d.textContent="Down"
    d.classList.add("down")
    li.appendChild("d")
}

 ulList.addEventListener('click',function(event){
    //consoel.log(event.target)
    if(event.target.tagName==="BUTTON"){
        if(event.target.className==="remove"){
            let li=event.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }
        else if(event.target.className==="up"){

        }
    }
        else if(event.target.className="down"){

        }


})
    
