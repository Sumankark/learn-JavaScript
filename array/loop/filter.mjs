// Syntax
// Execution
// Uses

// let ar = [1, 2, 3, 4, 5];

// output [2, 4]

// let arEven = ar.filter((value, i)=>{
//     if(value % 2 != 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(arEven)

// make a function that takes input as array and filter the even element

// let evenArray = (inputAr) => {
//     let output = inputAr.filter((value, i) =>{
//         if (value%2 === 0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });

//     return output;
// };

// console.log(evenArray([1, 2, 3, 4, 5]))

// let oddArray = (inputAr) =>{
//     let output1 = inputAr.filter((value, i)=>{
//         if(value%2 != 0){
//             return true;
//         }
//         else{
//             return false;
//         }

//     });

//     return output1;
// };

// console.log(oddArray([1, 2, 3, 4, 5]))

// let greaterThan17 = (inputAr) =>{
//     let output = inputAr.filter((value, i)=>{
//         if(value >= 17){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return output;
// };
// console.log(greaterThan17([2, 34, 53, 3, 5, 53, 3 , 4]))

// let positiveNumber = (inputAr) =>{
//     let output = inputAr.filter((value, i)=>{
//         if(value >= 0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return output;
// };
// console.log(positiveNumber([-2, 34, -53, 3, -5, 53, -3 , 4]))

// let alphabet = (inputAr) =>{
//     let output = inputAr.filter((value, i) =>{
//         if(typeof value === "string"){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return output;
// };
// console.log(alphabet(["a", 3, "b", "ram"]))

// let  length = (inputAr) =>{
//     let output1 = inputAr.filter((value, i) =>{
//         if(value.length >=4)
//         {
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return output1;
// };

// console.log(length(["ram" , "hari", "nitin"]))


// let range = (inputAr) =>{
//     let output = inputAr.filter((value, i) =>{
//         if(value>=10 && value<= 100){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return output;
// }
// console.log(range([2, 4, 53, 54, 3, 23]))


let truthy = (inputAr) =>{
    let output = inputAr.filter((value, i) =>{
        if(value){
            return true;
        }
        else{
            return false;
        }
    });
    return output;
}
console.log(truthy(["", 23, 0, "ram", false, undefined, null, "name"]))


let ar = [0, 'ram', undefined, " ", null, 2, 5, "shyam"]
let arT = ar.filter(Boolean)
console.log(arT)