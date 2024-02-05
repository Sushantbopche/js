// // loops
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// //for loop and while loop
// // for( intialization;conditionCheck; increment/decrement){
//     //statement
// //}

// // program1
// for(let i=1;i<=100;i++){ //2 //3 //4
//     console.log(i)//1 //2 //3
// }
 
// // program2
// for (let i=1;i<=5;i++ ){//2//4//5//6
//     console.log("hello")//1//2//3//4//5
// }
// //program3
// for (let i=1 ; i<=3;i++){//2//3//4
//     console.log(i)//1//2//3
// }

// //program6 ---5 to 1
// for (let i=5;i>=1;i--){//4//3//2//1//0
//     console.log(i)//5//4//3//2//1
// }

// //proggram7 -table 2
// for (let i=2; i<=20;i=i+2){//4//6//8-------22
//     console.log(i)//2//4//6//8----20
// }
//  //program8  reversde table of 5
//  for (let i=50;i>=5;i=i-5){//45//40//35----0
//  console.log(i)//50//45//40//35----5
//  } 
//  //break with for loop
//  for (let i=1;i<=5;i++){
//     if(i==4){
//         break;
//     }
 
//    console.log(i)

//  }

 

// for(let i=1;i<=5;i++){//2//3
//     if(i==3){
//         break
//     }
//     console.log(i)//1//2
// }

// for (let i=1;i<=5;i++){//2//3
//     console.log(i)//1//2//3
//     if(i==3){
//         break
//     }
// }


//for break
for (let i=0;i<=5;i++){//1//2//3
    if(i==3){
        break
    }
    console.log(i)//0//1//2
}

for (let i=0;i<=5;i++){//1//2//3//4
    console.log(i)//0//1//2//3
    if(i==3){
        break
    }
}

//continue
for(let i=1;i<=5;i++){//2//3//4//5//6
    if(i==3){
        continue
    }
    console.log(i)//1//2//4//5

}
for (let i=5;i>=0;i--){//4//3//2//1//0//-1
    if(i==4){
        continue
    }
    console.log(i)//5//3//2//1//0
    
}