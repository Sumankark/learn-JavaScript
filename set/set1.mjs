// [1, 2, 1, 3]
// set remove duplicate value of array.

// let s1 = new Set([1, 2, 1, 3])
// let uniqueValue = [...s1];


// console.log(uniqueValue);


let input = [1,2,3,4,1,1]

let uniqueValue = [...new Set(input)];

console.log(uniqueValue);