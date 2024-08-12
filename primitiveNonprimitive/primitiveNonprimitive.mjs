// Memory allocation in primitive 
// if let is used=> memory will allocate for that variable.

// let a = 1;
// let b = a;
// a= 5;
// console.log(a);
// console.log(b);


// // memory allocation in non primitive

// let ar1 = [1, 2];
// let ar2 = ar1;
// ar1.push(3);
// console.log(ar1)
// console.log(ar2)

// ===
// primitive
let a = 1;
let b = 1;
let c = a;
console.log(a === b);
console.log(a === c);


// non primitive
let x = [1,2];
let y = x;
let z = [1,2];
console.log(x === y);
console.log(z === x);


// console.log([1, 2]===[1, 2])