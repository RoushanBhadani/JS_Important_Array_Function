// reduce

// var list = [2,3,4,5,6]

// const getResult = list.reduce((accumulator, currentValue)=>{
//     // console.log(accumulator);
//     // console.log(currentValue)
//     return accumulator+currentValue
// },5)

// console.log(getResult);


// accumulator     +     currentValue   =
// 0             +          2         = 2
// 2             +          3         = 5
// 5            +          4         = 9
// 9            +           5         = 14
// 14           +           6         =  20



// concat

// var a = ["html","css"]

// var b = a.concat("js")

// console.log(b)
// console.log(a)



// find  - return element 

// var a = [3,5,7,2,4,9,8]

// const getResult = a.find((item)=>{
//     return item%2==0
// })

// console.log(getResult)


// findIndex

// var a = [3,5,7,2,4,9,8]

// const getResult = a.findIndex((item)=>{
//     return item%2==0
// })

// console.log(getResult)



// at

const data = ["html","css","js","react"];

console.log(data.at(0))