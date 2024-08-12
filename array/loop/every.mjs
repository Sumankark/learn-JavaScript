// let ar = [0, 2, 3, 4, 5]


// does the array has all positive number.
// let a = ar.every((value,i)=>{
//     if(value>0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(a)

// let arr = ar.every((value)=>{
//     return true;
// })
// console.log(arr)

// let list = [40, 30, 80]

// let pass = list.every((value, i) =>{
//     if(value >= 40){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(pass)

// let number = [2, 4, 9, 6]

// let even = number.every((value, i)=>{
//     if(value%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(even)

// let habbit = ["smoking", "drinking", "biting nails"]

// let smokingHabit = habbit.some((value,i) =>{
//     if(value === "smoking"){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(smokingHabit);

let string = "Bearer token"

let string1 = string.split(" ")

let check = string1.some((value, i) =>{
    if(value === "Bearer"){
        return true;
    }
    else{
        return false;
    }
});

console.log(check)

let list = ["utshab", "nitin", "ram", "hari"]

let checkNitin = list.some((value,i) =>{
    if(value === "nitin"){
        return true;
    }
    else{
        return false;
    }
});

console.log(checkNitin)