// class Calculator{
//     // addition(x,y){
//     //     console.log(x+y)
//     // }
//     // addition(x,y,z){
//     //     console.log(x+y+z)
//     // }
//     // addition(x,y,z,a){
//     //     console.log(x+y+z+a)
//     // }
//     addition(x,y,z,a){
//         if(x!= undefined&&y!= undefined && z!= undefined && a!= undefined){
//             console.log(x+y+z+a)
//         }
//         elseif(x!= undefined && y!=undefined && z!=undefined){
//             console.log(x+y+z)
//         }
//         elseif( x!= undefined && y!= undefined)
//             console.log(x+y)
//         }
//     }
        
    
// let a=new Calculator()
// a.addition(12,4)
// a.addition(12,4,3)
// a.addition(12,4,3,2)
    

class WorldBank{
    save(){
        console.log("i am save from WorldBank")
    }
    loan(){
        console.log("i am loan from WorldBank")
    }
}
class SBI extends WorldBank{
    displayBranch(){
        console.log("pune branch")
    }
    save(){
        console.log("i am save from WorldBank")
    }
    loan(){
        console.log("i am loan from WorldBank")
    }
}
class PNB extends WorldBank{
    displayBranch(){
        console.log("nagpur Branch")
    }
    save(){
        console.log("i am save from WorldBank")
    }
    loan(){
        console.log("i am loan from WorldBank")
    }
}
let sbi=new SBI()
sbi.loan()
sbi.save()
sbi.displayBranch()

let pnb=new PNB()
pnb.loan()
pnb.save()
pnb.displayBranch()
