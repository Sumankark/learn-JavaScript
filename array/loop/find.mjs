// find gives the first elements match elements

let ar = [1, 2, 3, 4]

let ar1 = ar.find((value, i) =>{
    if(value%2 === 0){
        return true;
    }
    else{
        return false;
    }
});

console.log(ar1)