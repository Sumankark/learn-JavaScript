// [1, 2, 3] has 3 in the list

let ar = [1, 2, '0']

let has0 = ar.some((value, i)=>{
    if (value === '0'){
        return true;
    }
    else{
        return false;
    }
});
console.log(has0)