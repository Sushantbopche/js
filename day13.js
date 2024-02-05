let firstName="sushant"
let lastName="bopche"
let middleName="narendra"

//object----properties and method

let city1="pune"
let q1=city1.length
console.log(q1)

//toUpperCase()
let city2="nagpur"
let q2=city2.toUpperCase()
console.log(q2)

//toLowerCase()

let city3="wardha"
let q3=city3.toLowerCase() 
console.log(q3)

//includes
let city4="chandrapur"
let q4=city4.includes('c')
let q5=city4.includes('cha')
let q6=city4.includes('C')
console.log(q4)
console.log(q5)
console.log(q6)

//indexOf()

let city5='jaipur'
//   j   a   i  p  u  r
//   0   1   2  3  4  5 
let q7=city5.indexOf('a')
let q8=city5.indexOf('A')
console.log(q7)
console.log(q8)


//startsWith
let city6="kanpur"
let q9=city6.startsWith('k')
let q10=city6.startsWith('kan')
let q11=city6.startsWith('K')
console.log(q9)
console.log(q10)
console.log(q11)

//endWith
let city7="udaipur"
let q12=city7.endsWith('r')
let q13=city7.endsWith('pur')
let q14=city7.endsWith('R')
console.log(q12)
console.log(q13)
console.log(q14)

//charAt()//blank sttring  if passes index greater than or equal length

let city8="goa"
let q15=city8.charAt(6)
console.log(q15)

//replace()

let info="i am learning javascript  javascript"
let q16=info.replace('javascript',"python")
console.log(q16)


//trimStart()

let city9=" newyork "
console.log(city9.length)
city9=city9.trimStart()
console.log(city9.length)


//trimEnd
let city10=" newyork "
city10=city10.trimEnd()
console.log(city10.length)

//trim()
let city11=" newyork "
city11=city11.trim()
console.log(city11.length)