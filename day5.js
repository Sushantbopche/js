let num=5
if(num>0 && num<=5){
    console.log("5% discount")
}
if(num>5 && num<=10){
    console.log("10% discount")
}
if(num>10){
    console.log("30% discount")
}

let Numt=-18
if( Numt>0 && Numt<=5){
    console.log("5% discount")
}
else if(Numt>5 && Numt<=10){ 
    console.log("10 discount")
}
else if(Numt>10){
 console.log("30% discount")
}
else{
    console.log("invalid")
}
    
// program 4

let a=10
let b=5

if(a>b){
    console.log ("a is greater")
}
else{
    console.log("b is greater")
}
// program 4
let x =10
let y=8
let z=5
if (x>y && x>z){
    console.log("a is greater")
}
else if(y>x && y>z){
    console.log("y is greater")
}
else {

    console.log("z is greater")
}

//expression?statement if value is true:statement if value is false
//s>t?console.log("s is greater "):console.log("t is greater")


//program6

let age = 17
let q1=age>=18? "can drive":'cannot drive'
console.log("q1")

//program7

let city="pune"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")  
    case "indore":
        console.log("MP") 
    case "lucknow":
        console.log("UP")
     default:
        console.log("incorrect")  
}

//program8

        let city2="indore"
        switch(city2){
            case "pune":
            console.log("MH")
            break
            case "jaipur":
            console.log("RJ")
            break
            case "indore":
            console.log("MP")
            break
            case "lucknow":
            console.log("UP")
            break
            default:
                console.log("incorrect city name")
        }
    
        let city3 = "kanpur"
        switch (city3){
            case "pune":
            case "nagpur" :
              console.log("MH")
              break     
            case "indore":
            case " bhopal" :
                console.log("MP")    
                break
             case "jaipur":
             case "udaipur":
                console.log("RJ")
                break
             case "lucknow" : 
             case "kanpur" :
                console.log("UP")
                break
                default:
                    console.log("incorrwct city name")

        }
        
        

