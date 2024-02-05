 //Logical operator

// AND -- &&
//true && true =====> true
//false&7 true =====> false
//true && false =====> false
//false && false =====> false
 
console.log(6==6 && 7==7)
console.log(6!=6 && 7==7)
console.log(6==6 && 7!=7)
console.log(6!=6 && 7!=7)

//OR
//true || true =====> true
//false || true=====> true
//true || false=====> true
//false|| false======> false

console.log(7==7 || 7!=='7')
console.log(7!=7 || 7!=='7')
console.log(7==7 || 7==='7')
console.log(7!=7 || 7==='7')

//NOT
//!true ===> false
//!false===> true
console.log(!(7=='7'))
console.log(!(7==='7'))

//conditional statement 
//input ------> multiple outcomes

//numT>0 && numT <=5 ===> 5% discount
//numT>5 && numT <=10 ===> 10% discount
//numT >10            ===> 30% discount

//if(condition){
 //   //statement
//}

let numT =5

if(5>0 && 5<=5){
    console.log("5% discount")
}
if(numT>5 && numT<=10){
    console.log("10% discount")
}
if(numT>10){
    console.log("30% discount")
}

numT=17

if(numT>0 && numT<=5){
    console.log("5% discount")
}
if( numT>5 && numT<=10){
    console.log("10% discount")
}
if(numT>10){
    console.log("30% discount")
}



