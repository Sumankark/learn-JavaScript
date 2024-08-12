// [1,2,[1,3],[1,3]]  ======= [1,2,[1,3]]

let ar1 =[1,2,[1,3],[1,3]];

let arrStr = ar1.map((value,i) =>{
    return JSON.stringify(value)
})

console.log(arrStr);

let uniqueValue = [...new Set(arrStr)]

console.log(uniqueValue)


let arrStr1 = uniqueValue.map((value,i) =>{
    return JSON.parse(value)
})

console.log(arrStr1)