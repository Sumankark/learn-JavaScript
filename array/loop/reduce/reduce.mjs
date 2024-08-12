let ar1 = [1, 2, 3]

let value = ar1.reduce((pre, cur) =>{

    return pre * cur;
},1)

console.log(value)